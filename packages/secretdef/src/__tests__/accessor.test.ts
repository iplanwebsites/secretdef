import { describe, it, expect, beforeEach, vi } from 'vitest';
import { enableAutoRegister, clearRegistry } from '../registry.js';
import { defineSecrets } from '../index.js';
import { useSecret, SecretNotAvailableError } from '../accessor.js';

beforeEach(() => {
  clearRegistry();
  vi.restoreAllMocks();
});

describe('useSecret with explicit map', () => {
  it('returns the resolved value', () => {
    const orig = process.env.MY_ENV_VAR;
    process.env.MY_ENV_VAR = 'hello';

    const specs = defineSecrets({ MY_KEY: { envVar: 'MY_ENV_VAR' } });
    const value = useSecret('MY_KEY', specs);
    expect(value).toBe('hello');

    if (orig === undefined) delete process.env.MY_ENV_VAR;
    else process.env.MY_ENV_VAR = orig;
  });

  it('throws for unknown key in explicit map', () => {
    const specs = defineSecrets({ MY_KEY: { envVar: 'MY_ENV_VAR' } });
    expect(() => useSecret('UNKNOWN', specs)).toThrowError(/Unknown secret key/);
  });

  it('throws SecretNotAvailableError for missing secret in explicit map', () => {
    const specs = defineSecrets({
      MISSING: { envVar: 'NONEXISTENT_VAR_99999', description: 'Test — https://example.com/keys' },
    });

    try {
      useSecret('MISSING', specs);
      expect.unreachable('should have thrown');
    } catch (err) {
      expect(err).toBeInstanceOf(SecretNotAvailableError);
      const e = err as SecretNotAvailableError;
      expect(e.secretKey).toBe('MISSING');
      expect(e.envVar).toBe('NONEXISTENT_VAR_99999');
      expect(e.message).toContain('https://example.com/keys');
    }
  });
});

describe('useSecret with auto-registry', () => {
  it('returns the resolved value from registry', () => {
    const orig = process.env.REG_VAR;
    process.env.REG_VAR = 'from-registry';

    enableAutoRegister();
    defineSecrets({ REG_KEY: { envVar: 'REG_VAR' } });

    const value = useSecret('REG_KEY');
    expect(value).toBe('from-registry');

    if (orig === undefined) delete process.env.REG_VAR;
    else process.env.REG_VAR = orig;
  });

  it('throws for unregistered key with helpful message', () => {
    expect(() => useSecret('UNKNOWN_KEY')).toThrowError(/Unknown secret key/);
    expect(() => useSecret('UNKNOWN_KEY')).toThrowError(/enableAutoRegister/);
  });

  it('throws SecretNotAvailableError for missing registered secret', () => {
    enableAutoRegister();
    defineSecrets({
      MISSING: { envVar: 'NONEXISTENT_VAR_99999', description: 'Test' },
    });

    expect(() => useSecret('MISSING')).toThrow(SecretNotAvailableError);
  });
});
