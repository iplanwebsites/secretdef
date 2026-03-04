import { describe, it, expect } from 'vitest';
import { resolveSecret } from '../resolve.js';
import type { SecretSpec } from '../types.js';

const base: SecretSpec = {
  description: 'Stripe API key',
};

describe('resolveSecret', () => {
  it('resolves a secret from process.env', () => {
    const info = resolveSecret('STRIPE_SECRET_KEY', base, 'production', {
      STRIPE_SECRET_KEY: 'sk_live_123',
    });
    expect(info.value).toBe('sk_live_123');
    expect(info.missing).toBe(false);
  });

  it('reports missing when env var is not set', () => {
    const info = resolveSecret('STRIPE_SECRET_KEY', base, 'production', {});
    expect(info.value).toBeUndefined();
    expect(info.missing).toBe(true);
  });

  it('applies environments override for matching environment', () => {
    const spec: SecretSpec = {
      ...base,
      environments: {
        dev: { envVar: 'STRIPE_TEST_SECRET_KEY' },
      },
    };

    const info = resolveSecret('STRIPE_SECRET_KEY', spec, 'dev', {
      STRIPE_TEST_SECRET_KEY: 'sk_test_456',
    });
    expect(info.envVar).toBe('STRIPE_TEST_SECRET_KEY');
    expect(info.value).toBe('sk_test_456');
  });

  it('uses default value from environments', () => {
    const spec: SecretSpec = {
      ...base,
      environments: {
        dev: { required: false, default: 'whsec_test' },
      },
    };

    const info = resolveSecret('STRIPE_SECRET_KEY', spec, 'dev', {});
    expect(info.value).toBe('whsec_test');
    expect(info.missing).toBe(false);
  });

  it('respects required: false override', () => {
    const spec: SecretSpec = {
      ...base,
      environments: {
        dev: { required: false },
      },
    };

    const info = resolveSecret('STRIPE_SECRET_KEY', spec, 'dev', {});
    expect(info.required).toBe(false);
    expect(info.missing).toBe(false);
  });

  it('falls back to key as env var when no override matches', () => {
    const spec: SecretSpec = {
      ...base,
      environments: {
        dev: { envVar: 'STRIPE_TEST_SECRET_KEY' },
      },
    };

    const info = resolveSecret('STRIPE_SECRET_KEY', spec, 'production', {
      STRIPE_SECRET_KEY: 'sk_live_789',
    });
    expect(info.envVar).toBe('STRIPE_SECRET_KEY');
    expect(info.value).toBe('sk_live_789');
  });
});
