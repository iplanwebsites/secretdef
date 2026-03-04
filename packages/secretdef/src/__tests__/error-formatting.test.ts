import { describe, it, expect, beforeEach } from 'vitest';
import { clearRegistry } from '../registry.js';
import { SecretNotAvailableError } from '../accessor.js';

beforeEach(() => {
  clearRegistry();
});

describe('SecretNotAvailableError', () => {
  it('includes the env var name', () => {
    const err = new SecretNotAvailableError(
      'DB',
      { envVar: 'DATABASE_URL' },
      'production',
    );
    expect(err.message).toContain('DATABASE_URL');
    expect(err.envVar).toBe('DATABASE_URL');
  });

  it('includes the secret key', () => {
    const err = new SecretNotAvailableError(
      'DB',
      { envVar: 'DATABASE_URL' },
      'production',
    );
    expect(err.secretKey).toBe('DB');
    expect(err.message).toContain('DB');
  });

  it('includes the environment', () => {
    const err = new SecretNotAvailableError(
      'DB',
      { envVar: 'DATABASE_URL' },
      'staging',
    );
    expect(err.environment).toBe('staging');
    expect(err.message).toContain('staging');
  });

  it('extracts URL from description into separate line', () => {
    const err = new SecretNotAvailableError(
      'STRIPE',
      {
        envVar: 'STRIPE_SECRET_KEY',
        description: 'Stripe API key — https://dashboard.stripe.com/apikeys',
      },
      'production',
    );
    expect(err.message).toContain('Where to find it:');
    expect(err.message).toContain('https://dashboard.stripe.com/apikeys');
    // Description without URL should still appear
    expect(err.message).toContain('Stripe API key');
  });

  it('handles description without URL', () => {
    const err = new SecretNotAvailableError(
      'KEY',
      {
        envVar: 'MY_KEY',
        description: 'Internal API key for service auth',
      },
      'production',
    );
    expect(err.message).toContain('Internal API key for service auth');
    expect(err.message).not.toContain('Where to find it:');
  });

  it('handles no description', () => {
    const err = new SecretNotAvailableError(
      'KEY',
      { envVar: 'MY_KEY' },
      'production',
    );
    expect(err.message).not.toContain('Description:');
    expect(err.message).toContain('MY_KEY');
  });

  it('includes registeredBy when provided', () => {
    const err = new SecretNotAvailableError(
      'KEY',
      { envVar: 'MY_KEY' },
      'production',
      'src/secrets.ts',
    );
    expect(err.message).toContain('src/secrets.ts');
    expect(err.message).toContain('Registered by:');
  });

  it('omits registeredBy when not provided', () => {
    const err = new SecretNotAvailableError(
      'KEY',
      { envVar: 'MY_KEY' },
      'production',
    );
    expect(err.message).not.toContain('Registered by:');
  });

  it('uses overridden env var name from envOverrides', () => {
    const err = new SecretNotAvailableError(
      'STRIPE',
      {
        envVar: 'STRIPE_SECRET_KEY',
        envOverrides: {
          development: { envVar: 'STRIPE_TEST_SECRET_KEY' },
        },
      },
      'development',
    );
    expect(err.envVar).toBe('STRIPE_TEST_SECRET_KEY');
    expect(err.message).toContain('STRIPE_TEST_SECRET_KEY');
  });

  it('uses base env var when envOverrides does not match', () => {
    const err = new SecretNotAvailableError(
      'STRIPE',
      {
        envVar: 'STRIPE_SECRET_KEY',
        envOverrides: {
          development: { envVar: 'STRIPE_TEST_SECRET_KEY' },
        },
      },
      'production',
    );
    expect(err.envVar).toBe('STRIPE_SECRET_KEY');
  });

  it('includes fix instruction', () => {
    const err = new SecretNotAvailableError(
      'KEY',
      { envVar: 'MY_KEY' },
      'production',
    );
    expect(err.message).toContain('To fix:');
    expect(err.message).toContain('MY_KEY');
  });

  it('has name set to SecretNotAvailableError', () => {
    const err = new SecretNotAvailableError(
      'KEY',
      { envVar: 'MY_KEY' },
      'production',
    );
    expect(err.name).toBe('SecretNotAvailableError');
    expect(err).toBeInstanceOf(Error);
  });
});
