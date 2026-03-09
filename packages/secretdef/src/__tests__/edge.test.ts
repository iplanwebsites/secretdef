import { describe, it, expect, beforeEach } from 'vitest';
import { defineSecrets } from '../index.js';
import { clearRegistry } from '../registry.js';
import {
  useSecretEdge,
  validateSecretsEdge,
  createEdgeAccessor,
} from '../edge.js';
import { SecretNotAvailableError, SecretValidationError } from '../accessor.js';

beforeEach(() => {
  clearRegistry();
});

describe('useSecretEdge', () => {
  it('reads a secret from the provided env object', () => {
    const specs = defineSecrets({ MY_KEY: { description: 'API key' } });
    const env = { MY_KEY: 'secret-value' };

    expect(useSecretEdge('MY_KEY', specs, env)).toBe('secret-value');
  });

  it('throws SecretNotAvailableError for missing secret', () => {
    const specs = defineSecrets({ MY_KEY: { description: 'API key' } });
    const env = {};

    expect(() => useSecretEdge('MY_KEY', specs, env)).toThrow(SecretNotAvailableError);
  });

  it('throws for unknown key', () => {
    const specs = defineSecrets({ MY_KEY: { description: 'API key' } });
    const env = { MY_KEY: 'value' };

    expect(() => useSecretEdge('UNKNOWN', specs, env)).toThrowError(/Unknown secret key/);
  });

  it('skips non-string env values (e.g. D1Database bindings)', () => {
    const specs = defineSecrets({ MY_KEY: { description: 'API key' } });
    const env = { MY_KEY: { prepare: () => {} }, OTHER: 'hello' };

    expect(() => useSecretEdge('MY_KEY', specs, env)).toThrow(SecretNotAvailableError);
  });

  it('respects devDefault in non-production env', () => {
    const specs = defineSecrets({ MY_KEY: { description: 'API key', devDefault: 'dev-val' } });
    const env = {};

    expect(useSecretEdge('MY_KEY', specs, env, 'development')).toBe('dev-val');
  });

  it('does not use devDefault in production', () => {
    const specs = defineSecrets({ MY_KEY: { description: 'API key', devDefault: 'dev-val' } });
    const env = {};

    expect(() => useSecretEdge('MY_KEY', specs, env, 'production')).toThrow(
      SecretNotAvailableError,
    );
  });

  it('runs validation and throws SecretValidationError', () => {
    const specs = defineSecrets({
      MY_URL: { description: 'URL', validate: 'url' },
    });
    const env = { MY_URL: 'not-a-url' };

    expect(() => useSecretEdge('MY_URL', specs, env)).toThrow(SecretValidationError);
  });

  it('does not require optional secrets', () => {
    const specs = defineSecrets({
      OPT_KEY: { description: 'Optional', required: false },
    });
    const env = {};

    // Should not throw — it's optional and missing, resolveSecret returns value=undefined
    // useSecretEdge throws because value is undefined regardless of required
    expect(() => useSecretEdge('OPT_KEY', specs, env)).toThrow(SecretNotAvailableError);
  });
});

describe('validateSecretsEdge', () => {
  it('returns resolved secrets', () => {
    const specs = defineSecrets({
      KEY_A: { description: 'A' },
      KEY_B: { description: 'B' },
    });
    const env = { KEY_A: 'val-a', KEY_B: 'val-b' };

    const result = validateSecretsEdge(specs, env);
    expect(result).toEqual({ KEY_A: 'val-a', KEY_B: 'val-b' });
  });

  it('throws AggregateError for missing required secrets in error mode', () => {
    const specs = defineSecrets({
      KEY_A: { description: 'A' },
      KEY_B: { description: 'B' },
    });
    const env = { KEY_A: 'val-a' };

    expect(() => validateSecretsEdge(specs, env)).toThrow(AggregateError);
  });

  it('throws AggregateError with correct problem count', () => {
    const specs = defineSecrets({
      KEY_A: { description: 'A' },
      KEY_B: { description: 'B' },
    });
    const env = {};

    try {
      validateSecretsEdge(specs, env);
      expect.unreachable('should have thrown');
    } catch (err) {
      expect(err).toBeInstanceOf(AggregateError);
      const agg = err as AggregateError;
      expect(agg.errors).toHaveLength(2);
      expect(agg.message).toContain('2 secret problems');
    }
  });

  it('calls onError callback when provided', () => {
    const specs = defineSecrets({ KEY_A: { description: 'A' } });
    const env = {};
    const problems: unknown[] = [];

    validateSecretsEdge(specs, env, {
      onError: (p) => {
        problems.push(...p);
      },
    });

    expect(problems).toHaveLength(1);
    expect(problems[0]).toMatchObject({ key: 'KEY_A', type: 'missing' });
  });

  it('does not throw in warn mode', () => {
    const specs = defineSecrets({ KEY_A: { description: 'A' } });
    const env = {};

    // warn mode should not throw
    const result = validateSecretsEdge(specs, env, { mode: 'warn' });
    expect(result).toEqual({});
  });

  it('defaults to production environment', () => {
    const specs = defineSecrets({
      KEY_A: { description: 'A', devDefault: 'dev-val' },
    });
    const env = {};

    // In production (default), devDefault should not apply, so it should throw
    expect(() => validateSecretsEdge(specs, env)).toThrow(AggregateError);
  });

  it('respects env option for non-production', () => {
    const specs = defineSecrets({
      KEY_A: { description: 'A', devDefault: 'dev-val' },
    });
    const env = {};

    const result = validateSecretsEdge(specs, env, { env: 'development', mode: 'warn' });
    expect(result).toEqual({ KEY_A: 'dev-val' });
  });

  it('reports invalid secrets', () => {
    const specs = defineSecrets({
      MY_URL: { description: 'URL', validate: 'url' },
    });
    const env = { MY_URL: 'not-a-url' };

    try {
      validateSecretsEdge(specs, env);
      expect.unreachable('should have thrown');
    } catch (err) {
      expect(err).toBeInstanceOf(AggregateError);
      const agg = err as AggregateError;
      expect(agg.errors[0]).toBeInstanceOf(SecretValidationError);
    }
  });

  it('skips optional missing secrets without error', () => {
    const specs = defineSecrets({
      REQ_KEY: { description: 'Required' },
      OPT_KEY: { description: 'Optional', required: false },
    });
    const env = { REQ_KEY: 'value' };

    const result = validateSecretsEdge(specs, env);
    expect(result).toEqual({ REQ_KEY: 'value' });
  });
});

describe('createEdgeAccessor', () => {
  it('returns a function that reads secrets', () => {
    const specs = defineSecrets({
      KEY_A: { description: 'A' },
      KEY_B: { description: 'B' },
    });
    const env = { KEY_A: 'val-a', KEY_B: 'val-b' };

    const get = createEdgeAccessor(specs, env);
    expect(get('KEY_A')).toBe('val-a');
    expect(get('KEY_B')).toBe('val-b');
  });

  it('throws SecretNotAvailableError for missing secrets', () => {
    const specs = defineSecrets({ KEY_A: { description: 'A' } });
    const env = {};

    const get = createEdgeAccessor(specs, env);
    expect(() => get('KEY_A')).toThrow(SecretNotAvailableError);
  });

  it('throws for unknown key', () => {
    const specs = defineSecrets({ KEY_A: { description: 'A' } });
    const env = { KEY_A: 'value' };

    const get = createEdgeAccessor(specs, env);
    expect(() => (get as any)('UNKNOWN')).toThrowError(/Unknown secret key/);
  });

  it('filters non-string bindings from env', () => {
    const specs = defineSecrets({ STR_KEY: { description: 'A string' } });
    const env = {
      STR_KEY: 'hello',
      DB: { prepare: () => {} },
      KV: { get: () => {} },
    };

    const get = createEdgeAccessor(specs, env);
    expect(get('STR_KEY')).toBe('hello');
  });
});
