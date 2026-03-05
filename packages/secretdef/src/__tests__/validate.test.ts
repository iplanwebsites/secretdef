import { describe, it, expect, beforeEach, vi } from 'vitest';
import { enableAutoRegister, clearRegistry } from '../registry.js';
import { defineSecrets, validateSecrets } from '../index.js';

beforeEach(() => {
  clearRegistry();
  vi.restoreAllMocks();
});

describe('validateSecrets with explicit map', () => {
  it('returns resolved values when all secrets are present', () => {
    const orig = process.env.TEST_KEY;
    process.env.TEST_KEY = 'value';

    const specs = defineSecrets({ TEST_KEY: {} });
    const result = validateSecrets(specs, 'development');

    expect(result.TEST_KEY).toBe('value');

    if (orig === undefined) delete process.env.TEST_KEY;
    else process.env.TEST_KEY = orig;
  });

  it('warns in development for missing secrets', () => {
    const specs = defineSecrets({
      NONEXISTENT_VAR_12345: { description: 'A test secret' },
    });

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSecrets(specs, 'development');

    expect(warnSpy).toHaveBeenCalled();
    const output = warnSpy.mock.calls[0][0];
    expect(output).toContain('1 secret problem');
    expect(output).toContain('NONEXISTENT_VAR_12345');
  });

  it('exits in production for missing secrets', () => {
    const specs = defineSecrets({ NONEXISTENT_VAR_12345: {} });

    const exitSpy = vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);
    vi.spyOn(console, 'error').mockImplementation(() => {});

    validateSecrets(specs, 'production');
    expect(exitSpy).toHaveBeenCalledWith(1);
  });

  it('respects mode override to force error in dev', () => {
    const specs = defineSecrets({ NONEXISTENT_VAR_12345: {} });

    const exitSpy = vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);
    vi.spyOn(console, 'error').mockImplementation(() => {});

    validateSecrets(specs, 'development', { mode: 'error' });
    expect(exitSpy).toHaveBeenCalledWith(1);
  });

  it('respects mode override to force warn in production', () => {
    const specs = defineSecrets({ NONEXISTENT_VAR_12345: {} });

    const exitSpy = vi.spyOn(process, 'exit').mockImplementation(() => undefined as never);
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    validateSecrets(specs, 'production', { mode: 'warn' });
    expect(exitSpy).not.toHaveBeenCalled();
    expect(warnSpy).toHaveBeenCalled();
  });
});

describe('validateSecrets with auto-registry', () => {
  it('validates from auto-registry when no map is passed', () => {
    enableAutoRegister();
    defineSecrets({ NONEXISTENT_VAR_12345: {} });

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSecrets(undefined, 'development');

    expect(warnSpy).toHaveBeenCalled();
    const output = warnSpy.mock.calls[0][0];
    expect(output).toContain('NONEXISTENT_VAR_12345');
  });

  it('returns resolved values from auto-registry', () => {
    const orig = process.env.AUTO_KEY;
    process.env.AUTO_KEY = 'auto-value';

    enableAutoRegister();
    defineSecrets({ AUTO_KEY: {} });

    const result = validateSecrets(undefined, 'development');
    expect(result.AUTO_KEY).toBe('auto-value');

    if (orig === undefined) delete process.env.AUTO_KEY;
    else process.env.AUTO_KEY = orig;
  });
});

describe('validateSecrets with spread pattern', () => {
  it('merges multiple defineSecrets results', () => {
    const stripe = defineSecrets({
      NONEXISTENT_STRIPE: {},
    });
    const sendgrid = defineSecrets({
      NONEXISTENT_SENDGRID: {},
    });

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSecrets({ ...stripe, ...sendgrid }, 'development');

    const output = warnSpy.mock.calls[0][0];
    expect(output).toContain('2 secret problems');
    expect(output).toContain('NONEXISTENT_STRIPE');
    expect(output).toContain('NONEXISTENT_SENDGRID');
  });
});
