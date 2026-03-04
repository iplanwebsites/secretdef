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

  it('error table includes registeredBy from auto-registry', () => {
    enableAutoRegister();
    defineSecrets({
      NONEXISTENT_XYZ: {},
    });

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);

    validateSecrets(undefined, 'production');

    const output = errorSpy.mock.calls[0][0];
    expect(output).toContain('registered by:');
  });

  it('warning table includes "Server will start" message', () => {
    const specs = defineSecrets({
      NONEXISTENT_XYZ: {},
    });

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSecrets(specs, 'development');

    const output = warnSpy.mock.calls[0][0];
    expect(output).toContain('Server will start');
    expect(output).toContain('throw if accessed at runtime');
  });

  it('error table uses red circle emoji', () => {
    const specs = defineSecrets({
      NONEXISTENT_XYZ: {},
    });

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);

    validateSecrets(specs, 'production');

    const output = errorSpy.mock.calls[0][0];
    expect(output).toContain('🔴');
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

  it('does not include optional missing secrets in missing count', () => {
    const specs = defineSecrets({
      NONEXISTENT_OPT: { required: false },
    });

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const result = validateSecrets(specs, 'development');

    expect(warnSpy).not.toHaveBeenCalled();
    // Optional missing secrets are not in the resolved map either
    expect(result).toEqual({});
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
