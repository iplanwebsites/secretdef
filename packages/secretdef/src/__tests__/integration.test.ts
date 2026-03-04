import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  defineSecrets,
  validateSecrets,
  useSecret,
  enableAutoRegister,
  clearRegistry,
} from '../index.js';

beforeEach(() => {
  clearRegistry();
  vi.restoreAllMocks();
});

describe('Style A: explicit spread', () => {
  it('merges multiple packages and validates them all', () => {
    const stripe = defineSecrets({
      STRIPE_SECRET_KEY: { description: 'Stripe API key' },
    });
    const sendgrid = defineSecrets({
      SENDGRID_API_KEY: { description: 'SendGrid key' },
    });

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const env = validateSecrets({ ...stripe, ...sendgrid }, 'development');

    expect(warnSpy).toHaveBeenCalled();
    const output = warnSpy.mock.calls[0][0];
    expect(output).toContain('2 secret problem(s)');
    expect(output).toContain('STRIPE_SECRET_KEY');
    expect(output).toContain('SENDGRID_API_KEY');
  });

  it('returns resolved values for present secrets', () => {
    const orig = process.env.TEST_SECRET_ABC;
    process.env.TEST_SECRET_ABC = 'my-value';

    const specs = defineSecrets({ TEST_SECRET_ABC: {} });
    const env = validateSecrets(specs, 'development');

    expect(env.TEST_SECRET_ABC).toBe('my-value');

    if (orig === undefined) delete process.env.TEST_SECRET_ABC;
    else process.env.TEST_SECRET_ABC = orig;
  });

  it('useSecret works with explicit map', () => {
    const orig = process.env.EXPLICIT_VAR;
    process.env.EXPLICIT_VAR = 'explicit-val';

    const specs = defineSecrets({ EXPLICIT_VAR: {} });
    expect(useSecret('EXPLICIT_VAR', specs)).toBe('explicit-val');

    if (orig === undefined) delete process.env.EXPLICIT_VAR;
    else process.env.EXPLICIT_VAR = orig;
  });
});

describe('Style B: auto-register', () => {
  it('auto-registers across multiple imports and validates', () => {
    enableAutoRegister();

    // Simulate separate module imports
    defineSecrets({ STRIPE_SECRET_KEY: {} });
    defineSecrets({ SENDGRID_API_KEY: {} });

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSecrets(undefined, 'development');

    const output = warnSpy.mock.calls[0][0];
    expect(output).toContain('2 secret problem(s)');
  });

  it('uses environments override correctly during validation', () => {
    const orig = process.env.STRIPE_TEST_SECRET_KEY;
    process.env.STRIPE_TEST_SECRET_KEY = 'sk_test_123';

    enableAutoRegister();
    defineSecrets({
      STRIPE_SECRET_KEY: {
        environments: { development: { envVar: 'STRIPE_TEST_SECRET_KEY' } },
      },
    });

    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    validateSecrets(undefined, 'development');

    expect(warnSpy).not.toHaveBeenCalled();

    if (orig === undefined) delete process.env.STRIPE_TEST_SECRET_KEY;
    else process.env.STRIPE_TEST_SECRET_KEY = orig;
  });

  it('useSecret works with auto-registry', () => {
    const orig = process.env.AUTO_VAR;
    process.env.AUTO_VAR = 'auto-val';

    enableAutoRegister();
    defineSecrets({ AUTO_VAR: {} });

    expect(useSecret('AUTO_VAR')).toBe('auto-val');

    if (orig === undefined) delete process.env.AUTO_VAR;
    else process.env.AUTO_VAR = orig;
  });
});

describe('SDK author pattern', () => {
  it('defineSecrets returns the same specs regardless of auto-register', () => {
    const specsNoAuto = defineSecrets({
      MY_VAR: { description: 'test' },
    });

    clearRegistry();
    enableAutoRegister();

    const specsWithAuto = defineSecrets({
      MY_VAR_2: { description: 'test' },
    });

    // Both return pure data
    expect(specsNoAuto).toEqual({ MY_VAR: { description: 'test' } });
    expect(specsWithAuto).toEqual({ MY_VAR_2: { description: 'test' } });
  });
});
