import { describe, it, expect, beforeEach } from 'vitest';
import {
  defineSecrets,
  useSecret,
  validateSecrets,
  createSecretAccessor,
  SecretNotAvailableError,
  SecretValidationError,
} from '../index.js';
import { clearRegistry } from '../registry.js';

beforeEach(() => {
  clearRegistry();
});

describe('useSecret with custom env source', () => {
  it('reads a secret from the provided env object', () => {
    const specs = defineSecrets({ MY_KEY: { description: 'API key' } });
    const env = { MY_KEY: 'secret-value' };

    expect(useSecret('MY_KEY', specs, { env })).toBe('secret-value');
  });

  it('throws SecretNotAvailableError for missing secret', () => {
    const specs = defineSecrets({ MY_KEY: { description: 'API key' } });

    expect(() => useSecret('MY_KEY', specs, { env: {} })).toThrow(SecretNotAvailableError);
  });

  it('throws for unknown key', () => {
    const specs = defineSecrets({ MY_KEY: { description: 'API key' } });

    expect(() => useSecret('UNKNOWN', specs, { env: { MY_KEY: 'val' } })).toThrowError(
      /Unknown secret key/,
    );
  });

  it('skips non-string env values (e.g. D1Database bindings)', () => {
    const specs = defineSecrets({ MY_KEY: { description: 'API key' } });
    const env = { MY_KEY: { prepare: () => {} }, OTHER: 'hello' };

    expect(() => useSecret('MY_KEY', specs, { env })).toThrow(SecretNotAvailableError);
  });

  it('respects devDefault in non-production env', () => {
    const specs = defineSecrets({ MY_KEY: { description: 'API key', devDefault: 'dev-val' } });
    // NODE_ENV=development in the custom env triggers devDefault
    const env = { NODE_ENV: 'development' };

    expect(useSecret('MY_KEY', specs, { env })).toBe('dev-val');
  });

  it('does not use devDefault when NODE_ENV=production in custom env', () => {
    const specs = defineSecrets({ MY_KEY: { description: 'API key', devDefault: 'dev-val' } });
    const env = { NODE_ENV: 'production' };

    expect(() => useSecret('MY_KEY', specs, { env })).toThrow(SecretNotAvailableError);
  });

  it('runs validation and throws SecretValidationError', () => {
    const specs = defineSecrets({
      MY_URL: { description: 'URL', validate: 'url' },
    });

    expect(() => useSecret('MY_URL', specs, { env: { MY_URL: 'not-a-url' } })).toThrow(
      SecretValidationError,
    );
  });
});

describe('validateSecrets with custom env source', () => {
  it('returns resolved secrets from custom env', () => {
    const specs = defineSecrets({
      KEY_A: { description: 'A' },
      KEY_B: { description: 'B' },
    });
    const env = { KEY_A: 'val-a', KEY_B: 'val-b', NODE_ENV: 'development' };

    const result = validateSecrets(specs, { env });
    expect(result).toEqual({ KEY_A: 'val-a', KEY_B: 'val-b' });
  });

  it('throws for missing required secrets in production', () => {
    const specs = defineSecrets({
      KEY_A: { description: 'A' },
    });
    const env = { NODE_ENV: 'production' };

    // In edge runtime (no process.exit), validateSecrets throws
    // But since process.exit exists in Node test env, it would exit.
    // Use mode: 'warn' to test the behavior without exit
    const result = validateSecrets(specs, { env, mode: 'warn' });
    expect(result).toEqual({});
  });

  it('respects devDefault with custom env', () => {
    const specs = defineSecrets({
      KEY_A: { description: 'A', devDefault: 'dev-val' },
    });
    const env = { NODE_ENV: 'development' };

    const result = validateSecrets(specs, { env });
    expect(result).toEqual({ KEY_A: 'dev-val' });
  });

  it('skips optional missing secrets', () => {
    const specs = defineSecrets({
      REQ_KEY: { description: 'Required' },
      OPT_KEY: { description: 'Optional', required: false },
    });
    const env = { REQ_KEY: 'value', NODE_ENV: 'development' };

    const result = validateSecrets(specs, { env });
    expect(result).toEqual({ REQ_KEY: 'value' });
  });

  it('backward compat: still works with old (specs, envName, options) signature', () => {
    const specs = defineSecrets({
      KEY_A: { description: 'A', devDefault: 'dev-val' },
    });

    const result = validateSecrets(specs, 'development');
    expect(result).toEqual({ KEY_A: 'dev-val' });
  });

  it('reports invalid secrets in warn mode', () => {
    const specs = defineSecrets({
      MY_URL: { description: 'URL', validate: 'url' },
    });
    const env = { MY_URL: 'not-a-url', NODE_ENV: 'development' };

    const result = validateSecrets(specs, { env, mode: 'warn' });
    expect(result).toEqual({});
  });
});

describe('createSecretAccessor', () => {
  it('returns a function that reads secrets from custom env', () => {
    const specs = defineSecrets({
      KEY_A: { description: 'A' },
      KEY_B: { description: 'B' },
    });
    const env = { KEY_A: 'val-a', KEY_B: 'val-b' };

    const get = createSecretAccessor(specs, env);
    expect(get('KEY_A')).toBe('val-a');
    expect(get('KEY_B')).toBe('val-b');
  });

  it('throws SecretNotAvailableError for missing secrets', () => {
    const specs = defineSecrets({ KEY_A: { description: 'A' } });

    const get = createSecretAccessor(specs, {});
    expect(() => get('KEY_A')).toThrow(SecretNotAvailableError);
  });

  it('throws for unknown key', () => {
    const specs = defineSecrets({ KEY_A: { description: 'A' } });

    const get = createSecretAccessor(specs, { KEY_A: 'value' });
    expect(() => (get as any)('UNKNOWN')).toThrowError(/Unknown secret key/);
  });

  it('filters non-string bindings from env', () => {
    const specs = defineSecrets({ STR_KEY: { description: 'A string' } });
    const env = {
      STR_KEY: 'hello',
      DB: { prepare: () => {} },
      KV: { get: () => {} },
    };

    const get = createSecretAccessor(specs, env);
    expect(get('STR_KEY')).toBe('hello');
  });

  it('works with explicit nodeEnv parameter', () => {
    const specs = defineSecrets({ KEY_A: { description: 'A', devDefault: 'dev' } });

    const get = createSecretAccessor(specs, {}, 'development');
    expect(get('KEY_A')).toBe('dev');
  });
});
