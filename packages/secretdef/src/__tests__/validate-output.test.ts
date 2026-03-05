import { describe, it, expect, beforeEach, vi } from 'vitest';
import { enableAutoRegister, clearRegistry } from '../registry.js';
import { defineSecrets, validateSecrets } from '../index.js';

beforeEach(() => {
  clearRegistry();
  vi.restoreAllMocks();
});

describe('validateSecrets output format', () => {
  it('error table includes description', () => {
    const specs = defineSecrets({
      NONEXISTENT_XYZ: { description: 'A test API key' },
    });

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);

    validateSecrets(specs, 'production');

    const output = errorSpy.mock.calls[0][0];
    expect(output).toContain('A test API key');
  });

  it('error table includes dashboard URL when set', () => {
    const specs = defineSecrets({
      NONEXISTENT_XYZ: { description: 'A test key', dashboard: 'https://example.com/keys' },
    });

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);

    validateSecrets(specs, 'production');

    const output = errorSpy.mock.calls[0][0];
    expect(output).toContain('dashboard: https://example.com/keys');
  });

  it('error table includes registeredBy from auto-registry', () => {
    enableAutoRegister();
    defineSecrets({
      NONEXISTENT_XYZ: {},
    });

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);

    validateSecrets(undefined, 'production');

    const output = errorSpy.mock.calls[0][0];
    expect(output).toContain('defined in:');
  });

  it('warning table includes "Server will start" message', () => {
    const specs = defineSecrets({
      NONEXISTENT_XYZ: {},
    });

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSecrets(specs, 'development');

    const output = warnSpy.mock.calls[0][0];
    expect(output).toContain('Server will start');
    expect(output).toContain('missing secrets will throw if accessed at runtime');
  });

  it('error table uses red circle emoji', () => {
    const specs = defineSecrets({
      NONEXISTENT_XYZ: {},
    });

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);

    validateSecrets(specs, 'production');

    const output = errorSpy.mock.calls[0][0];
    expect(output).toContain('❌');
  });

  it('warning table uses warning emoji', () => {
    const specs = defineSecrets({
      NONEXISTENT_XYZ: {},
    });

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSecrets(specs, 'development');

    const output = warnSpy.mock.calls[0][0];
    expect(output).toContain('⚠');
  });

  it('shows correct env in output', () => {
    const specs = defineSecrets({
      NONEXISTENT_XYZ: {},
    });

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSecrets(specs, 'staging');

    const output = warnSpy.mock.calls[0][0];
    expect(output).toContain('[env=staging]');
  });

  it('returns empty object for empty specs', () => {
    const result = validateSecrets({}, 'development');
    expect(result).toEqual({});
  });

  it('does not warn or error when all secrets are present', () => {
    const orig = process.env.VALID_KEY_TEST;
    process.env.VALID_KEY_TEST = 'present';

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const specs = defineSecrets({ VALID_KEY_TEST: {} });
    validateSecrets(specs, 'production');

    expect(warnSpy).not.toHaveBeenCalled();
    expect(errorSpy).not.toHaveBeenCalled();

    if (orig === undefined) delete process.env.VALID_KEY_TEST;
    else process.env.VALID_KEY_TEST = orig;
  });

  it('does not include optional missing secrets in problem count', () => {
    const specs = defineSecrets({
      NONEXISTENT_OPT: { required: false },
    });

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const result = validateSecrets(specs, 'development');

    // No error output — optional secrets are not problems
    expect(errorSpy).not.toHaveBeenCalled();
    // But warn IS called to show the optional summary
    expect(warnSpy).toHaveBeenCalled();
    const output = warnSpy.mock.calls[0][0];
    expect(output).toContain('optional');
    expect(output).toContain('NONEXISTENT_OPT');
    // Optional missing secrets are not in the resolved map
    expect(result).toEqual({});
  });

  it('shows optional secrets summary in warn mode alongside problems', () => {
    const specs = defineSecrets({
      NONEXISTENT_REQ: { description: 'Required key' },
      NONEXISTENT_OPT: { required: false, description: 'Optional key' },
    });

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSecrets(specs, 'development');

    const output = warnSpy.mock.calls[0][0];
    // Problem count should only include required
    expect(output).toContain('1 secret problem');
    // Optional section should be present
    expect(output).toContain('optional');
    expect(output).toContain('NONEXISTENT_OPT');
    // Should NOT list optional as a problem
    expect(output).not.toMatch(/🔑 NONEXISTENT_OPT/);
  });

  it('does not show optional summary in error (production) mode', () => {
    const specs = defineSecrets({
      NONEXISTENT_OPT: { required: false },
    });

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);
    validateSecrets(specs, 'production');

    // No problems, no output at all in production
    expect(errorSpy).not.toHaveBeenCalled();
  });

  it('uses 🔑 marker for missing secrets', () => {
    const specs = defineSecrets({
      NONEXISTENT_XYZ: {},
    });

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);

    validateSecrets(specs, 'production');

    const output = errorSpy.mock.calls[0][0];
    expect(output).toContain('🔑');
    expect(output).toContain('missing');
  });

  it('uses 🔧 marker for invalid secrets', () => {
    const orig = process.env.INVALID_URL_TEST;
    process.env.INVALID_URL_TEST = 'not-a-url';

    const specs = defineSecrets({
      INVALID_URL_TEST: { validate: 'url' },
    });

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);

    validateSecrets(specs, 'production');

    const output = errorSpy.mock.calls[0][0];
    expect(output).toContain('🔧');
    expect(output).toContain('invalid');

    if (orig === undefined) delete process.env.INVALID_URL_TEST;
    else process.env.INVALID_URL_TEST = orig;
  });

  it('shows breakdown when both missing and invalid', () => {
    const orig = process.env.BAD_URL_TEST;
    process.env.BAD_URL_TEST = 'not-a-url';

    const specs = defineSecrets({
      NONEXISTENT_ABC: { description: 'Missing one' },
      BAD_URL_TEST: { validate: 'url' },
    });

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);

    validateSecrets(specs, 'production');

    const output = errorSpy.mock.calls[0][0];
    expect(output).toContain('2 secret problems');
    expect(output).toContain('1 missing');
    expect(output).toContain('1 invalid');

    if (orig === undefined) delete process.env.BAD_URL_TEST;
    else process.env.BAD_URL_TEST = orig;
  });

  it('uses singular "problem" for single issue', () => {
    const specs = defineSecrets({
      NONEXISTENT_XYZ: {},
    });

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);

    validateSecrets(specs, 'production');

    const output = errorSpy.mock.calls[0][0];
    expect(output).toContain('1 secret problem');
    expect(output).not.toContain('1 secret problems');
  });

  it('does not show breakdown for single category', () => {
    const specs = defineSecrets({
      NONEXISTENT_A: {},
      NONEXISTENT_B: {},
    });

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);

    validateSecrets(specs, 'production');

    const output = errorSpy.mock.calls[0][0];
    expect(output).toContain('2 secret problems');
    // No breakdown needed when all are the same type
    expect(output).not.toContain('(');
  });

  it('includes .env block for missing secrets', () => {
    const specs = defineSecrets({
      MY_API_KEY: { example: 'sk_live_xxx' },
      MY_DB_URL: {},
    });

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);

    validateSecrets(specs, 'production');

    const output = errorSpy.mock.calls[0][0];
    expect(output).toContain('Add to your .env file:');
    expect(output).toContain('MY_API_KEY=sk_live_xxx');
    expect(output).toContain('MY_DB_URL=');
  });

  it('marks invalid secrets in .env block', () => {
    const orig = process.env.BAD_URL_ENV;
    process.env.BAD_URL_ENV = 'nope';

    const specs = defineSecrets({
      BAD_URL_ENV: { validate: 'url' },
    });

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);

    validateSecrets(specs, 'production');

    const output = errorSpy.mock.calls[0][0];
    expect(output).toContain('BAD_URL_ENV=');
    expect(output).toContain('current value is invalid');

    if (orig === undefined) delete process.env.BAD_URL_ENV;
    else process.env.BAD_URL_ENV = orig;
  });

  it('uses "defined in" instead of "registered by"', () => {
    enableAutoRegister();
    defineSecrets({
      NONEXISTENT_XYZ: {},
    });

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);

    validateSecrets(undefined, 'production');

    const output = errorSpy.mock.calls[0][0];
    expect(output).toContain('defined in:');
    expect(output).not.toContain('registered by:');
  });

  it('resolves environments default values', () => {
    const specs = defineSecrets({
      DATABASE_URL: {
        environments: {
          development: { default: 'postgresql://localhost/dev' },
        },
      },
    });

    const result = validateSecrets(specs, 'development');
    expect(result.DATABASE_URL).toBe('postgresql://localhost/dev');
  });

  it('env var value takes precedence over environments default', () => {
    const orig = process.env.DATABASE_URL;
    process.env.DATABASE_URL = 'postgresql://prod-host/db';

    const specs = defineSecrets({
      DATABASE_URL: {
        environments: {
          development: { default: 'postgresql://localhost/dev' },
        },
      },
    });

    const result = validateSecrets(specs, 'production');
    expect(result.DATABASE_URL).toBe('postgresql://prod-host/db');

    if (orig === undefined) delete process.env.DATABASE_URL;
    else process.env.DATABASE_URL = orig;
  });
});
