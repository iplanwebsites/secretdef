import { describe, it, expect, vi, beforeEach } from 'vitest';
import { builtinValidators } from '../validators.js';
import { runValidation } from '../validators.js';
import { defineSecrets, validateSecrets, useSecret, clearRegistry } from '../index.js';

beforeEach(() => {
  clearRegistry();
  vi.restoreAllMocks();
});

describe('built-in validators', () => {
  describe('str', () => {
    it('accepts non-empty string', () => {
      expect(builtinValidators.str('hello')).toBe('hello');
    });
    it('rejects empty string', () => {
      expect(() => builtinValidators.str('')).toThrow('non-empty');
    });
  });

  describe('bool', () => {
    it.each(['true', 't', '1', 'yes', 'on', 'TRUE', 'True'])('accepts truthy: %s', (v) => {
      expect(builtinValidators.bool(v)).toBe(true);
    });
    it.each(['false', 'f', '0', 'no', 'off', 'FALSE', 'False'])('accepts falsy: %s', (v) => {
      expect(builtinValidators.bool(v)).toBe(false);
    });
    it('rejects invalid', () => {
      expect(() => builtinValidators.bool('maybe')).toThrow('Invalid boolean');
    });
  });

  describe('num', () => {
    it('accepts integers', () => {
      expect(builtinValidators.num('42')).toBe(42);
    });
    it('accepts floats', () => {
      expect(builtinValidators.num('3.14')).toBe(3.14);
    });
    it('accepts negative', () => {
      expect(builtinValidators.num('-1')).toBe(-1);
    });
    it('rejects non-numeric', () => {
      expect(() => builtinValidators.num('abc')).toThrow('Invalid number');
    });
  });

  describe('email', () => {
    it('accepts valid email', () => {
      expect(builtinValidators.email('user@example.com')).toBe('user@example.com');
    });
    it('rejects invalid email', () => {
      expect(() => builtinValidators.email('not-an-email')).toThrow('Invalid email');
    });
  });

  describe('host', () => {
    it('accepts valid domain', () => {
      expect(builtinValidators.host('example.com')).toBe('example.com');
    });
    it('accepts localhost', () => {
      expect(builtinValidators.host('localhost')).toBe('localhost');
    });
    it('accepts IPv4', () => {
      expect(builtinValidators.host('192.168.1.1')).toBe('192.168.1.1');
    });
    it('accepts IPv6', () => {
      expect(builtinValidators.host('::1')).toBe('::1');
    });
    it('rejects empty', () => {
      expect(() => builtinValidators.host('')).toThrow('non-empty');
    });
    it('rejects whitespace', () => {
      expect(() => builtinValidators.host('has space')).toThrow('Invalid host');
    });
    it('rejects invalid characters', () => {
      expect(() => builtinValidators.host('!!!bad')).toThrow('Invalid host');
    });
  });

  describe('port', () => {
    it('accepts valid port', () => {
      expect(builtinValidators.port('8080')).toBe(8080);
    });
    it('accepts 0', () => {
      expect(builtinValidators.port('0')).toBe(0);
    });
    it('accepts 65535', () => {
      expect(builtinValidators.port('65535')).toBe(65535);
    });
    it('rejects negative', () => {
      expect(() => builtinValidators.port('-1')).toThrow('Invalid port');
    });
    it('rejects > 65535', () => {
      expect(() => builtinValidators.port('70000')).toThrow('Invalid port');
    });
    it('rejects float', () => {
      expect(() => builtinValidators.port('80.5')).toThrow('Invalid port');
    });
  });

  describe('url', () => {
    it('accepts valid URL', () => {
      expect(builtinValidators.url('https://example.com')).toBe('https://example.com');
    });
    it('rejects invalid URL', () => {
      expect(() => builtinValidators.url('not a url')).toThrow('Invalid URL');
    });
  });

  describe('json', () => {
    it('accepts valid JSON object', () => {
      expect(builtinValidators.json('{"a":1}')).toEqual({ a: 1 });
    });
    it('accepts valid JSON array', () => {
      expect(builtinValidators.json('[1,2,3]')).toEqual([1, 2, 3]);
    });
    it('rejects invalid JSON', () => {
      expect(() => builtinValidators.json('{bad}')).toThrow('Invalid JSON');
    });
  });
});

describe('runValidation', () => {
  it('returns undefined for valid input with built-in', () => {
    expect(runValidation('num', '42')).toBeUndefined();
  });

  it('returns error message for invalid input with built-in', () => {
    expect(runValidation('num', 'abc')).toContain('Invalid number');
  });

  it('works with custom validator function', () => {
    const custom = (input: string) => {
      if (!input.startsWith('sk-')) throw new Error('Must start with sk-');
      return input;
    };
    expect(runValidation(custom, 'sk-123')).toBeUndefined();
    expect(runValidation(custom, 'bad')).toContain('Must start with sk-');
  });
});

describe('validation integration with validateSecrets', () => {
  it('reports validation errors in warn mode', () => {
    process.env.VALIDATED_PORT = 'not-a-port';

    const specs = defineSecrets({
      VALIDATED_PORT: { validate: 'port' },
    });

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const result = validateSecrets(specs, 'development');

    expect(warnSpy).toHaveBeenCalled();
    const output = warnSpy.mock.calls[0][0];
    expect(output).toContain('VALIDATED_PORT');
    expect(output).toContain('invalid');
    expect(result.VALIDATED_PORT).toBeUndefined();

    delete process.env.VALIDATED_PORT;
  });

  it('exits in production for validation errors', () => {
    process.env.VALIDATED_NUM = 'abc';

    const specs = defineSecrets({
      VALIDATED_NUM: { validate: 'num' },
    });

    const exitSpy = vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);
    vi.spyOn(console, 'error').mockImplementation(() => {});

    validateSecrets(specs, 'production');
    expect(exitSpy).toHaveBeenCalledWith(1);

    delete process.env.VALIDATED_NUM;
  });

  it('passes valid values through', () => {
    process.env.VALIDATED_URL = 'https://example.com';

    const specs = defineSecrets({
      VALIDATED_URL: { validate: 'url' },
    });

    const result = validateSecrets(specs, 'development');
    expect(result.VALIDATED_URL).toBe('https://example.com');

    delete process.env.VALIDATED_URL;
  });
});

describe('validation integration with useSecret', () => {
  it('throws SecretValidationError for invalid value', () => {
    process.env.USE_BOOL = 'maybe';

    const specs = defineSecrets({
      USE_BOOL: { validate: 'bool' },
    });

    expect(() => useSecret('USE_BOOL', specs)).toThrow('SecretValidationError');
    expect(() => useSecret('USE_BOOL', specs)).toThrow('failed validation');

    delete process.env.USE_BOOL;
  });

  it('returns value when validation passes', () => {
    process.env.USE_EMAIL = 'test@test.com';

    const specs = defineSecrets({
      USE_EMAIL: { validate: 'email' },
    });

    expect(useSecret('USE_EMAIL', specs)).toBe('test@test.com');

    delete process.env.USE_EMAIL;
  });

  it('works with custom validator in useSecret', () => {
    process.env.USE_CUSTOM = 'sk-abc123';

    const specs = defineSecrets({
      USE_CUSTOM: {
        validate: (input: string) => {
          if (!input.startsWith('sk-')) throw new Error('Must start with sk-');
          return input;
        },
      },
    });

    expect(useSecret('USE_CUSTOM', specs)).toBe('sk-abc123');

    delete process.env.USE_CUSTOM;
  });
});

describe('choices', () => {
  it('passes when value is in choices', () => {
    process.env.MY_REGION = 'us-east-1';
    const specs = defineSecrets({
      MY_REGION: { choices: ['us-east-1', 'eu-west-1', 'ap-south-1'] },
    });
    const result = validateSecrets(specs, 'development');
    expect(result.MY_REGION).toBe('us-east-1');
    delete process.env.MY_REGION;
  });

  it('fails when value is not in choices', () => {
    process.env.MY_REGION = 'mars-1';
    const specs = defineSecrets({
      MY_REGION: { choices: ['us-east-1', 'eu-west-1'] },
    });
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const result = validateSecrets(specs, 'development');
    expect(warnSpy).toHaveBeenCalled();
    expect(warnSpy.mock.calls[0][0]).toContain('not in allowed choices');
    expect(result.MY_REGION).toBeUndefined();
    delete process.env.MY_REGION;
  });

  it('choices checked after validate passes', () => {
    process.env.MY_PORT = '8080';
    const specs = defineSecrets({
      MY_PORT: { validate: 'port', choices: ['8080', '3000'] },
    });
    const result = validateSecrets(specs, 'development');
    expect(result.MY_PORT).toBe('8080');
    delete process.env.MY_PORT;
  });

  it('validate error takes priority over choices', () => {
    process.env.MY_PORT = 'abc';
    const specs = defineSecrets({
      MY_PORT: { validate: 'port', choices: ['8080', '3000'] },
    });
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSecrets(specs, 'development');
    expect(warnSpy.mock.calls[0][0]).toContain('Invalid port');
    delete process.env.MY_PORT;
  });

  it('useSecret throws for invalid choice', () => {
    process.env.MY_ENV = 'staging';
    const specs = defineSecrets({
      MY_ENV: { choices: ['development', 'production'] },
    });
    expect(() => useSecret('MY_ENV', specs)).toThrow('not in allowed choices');
    delete process.env.MY_ENV;
  });
});

describe('example field', () => {
  it('shows example in missing secret warning', () => {
    const specs = defineSecrets({
      STRIPE_KEY: { description: 'Stripe secret key', example: 'sk_live_...' },
    });
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSecrets(specs, 'development');
    const output = warnSpy.mock.calls[0][0];
    expect(output).toContain('example: sk_live_...');
  });

  it('shows example in validation error warning', () => {
    process.env.STRIPE_KEY = '';
    const specs = defineSecrets({
      STRIPE_KEY: { validate: 'str', example: 'sk_live_...' },
    });
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSecrets(specs, 'development');
    const output = warnSpy.mock.calls[0][0];
    expect(output).toContain('example: sk_live_...');
    delete process.env.STRIPE_KEY;
  });

  it('shows example in SecretNotAvailableError', () => {
    const specs = defineSecrets({
      MISSING_EX: { example: 'abc123' },
    });
    try {
      useSecret('MISSING_EX', specs);
    } catch (e: any) {
      expect(e.message).toContain('Example:              abc123');
    }
  });
});

describe('devDefault', () => {
  it('uses devDefault in development', () => {
    const specs = defineSecrets({
      DEV_SECRET: { devDefault: 'dev-value' },
    });
    const result = validateSecrets(specs, 'development');
    expect(result.DEV_SECRET).toBe('dev-value');
  });

  it('does NOT use devDefault in production', () => {
    const specs = defineSecrets({
      DEV_SECRET: { devDefault: 'dev-value' },
    });
    const exitSpy = vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);
    vi.spyOn(console, 'error').mockImplementation(() => {});
    validateSecrets(specs, 'production');
    expect(exitSpy).toHaveBeenCalledWith(1);
  });

  it('uses devDefault in test env', () => {
    const specs = defineSecrets({
      DEV_SECRET: { devDefault: 'test-fallback' },
    });
    const result = validateSecrets(specs, 'test');
    expect(result.DEV_SECRET).toBe('test-fallback');
  });

  it('real env value takes priority over devDefault', () => {
    process.env.DEV_SECRET = 'real-value';
    const specs = defineSecrets({
      DEV_SECRET: { devDefault: 'dev-value' },
    });
    const result = validateSecrets(specs, 'development');
    expect(result.DEV_SECRET).toBe('real-value');
    delete process.env.DEV_SECRET;
  });

  it('env-specific default takes priority over devDefault', () => {
    const specs = defineSecrets({
      DEV_SECRET: {
        devDefault: 'dev-value',
        environments: { development: { default: 'env-specific' } },
      },
    });
    const result = validateSecrets(specs, 'development');
    expect(result.DEV_SECRET).toBe('env-specific');
  });
});
