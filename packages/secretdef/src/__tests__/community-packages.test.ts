import { describe, it, expect, beforeEach } from 'vitest';
import { clearRegistry } from '../registry.js';
import type { SecretSpec } from '../types.js';

beforeEach(() => {
  clearRegistry();
});

/**
 * Validates that a community package's secrets export
 * follows the expected structure.
 */
function assertValidSecrets(
  name: string,
  secrets: Record<string, SecretSpec>,
) {
  expect(typeof secrets).toBe('object');
  expect(Object.keys(secrets).length).toBeGreaterThan(0);

  for (const [key, spec] of Object.entries(secrets)) {
    // Every spec must have envVar
    expect(spec.envVar, `${name}.${key} must have envVar`).toBeTruthy();
    expect(typeof spec.envVar, `${name}.${key}.envVar must be string`).toBe('string');

    // description should be present
    expect(spec.description, `${name}.${key} should have description`).toBeTruthy();

    // description should contain a URL
    expect(
      spec.description,
      `${name}.${key}.description should contain a URL`,
    ).toMatch(/https?:\/\//);

    // If envOverrides exists, it should be an object
    if (spec.envOverrides) {
      expect(typeof spec.envOverrides).toBe('object');
      for (const [env, override] of Object.entries(spec.envOverrides)) {
        if (override) {
          // Override fields should be valid types
          if (override.envVar !== undefined) {
            expect(typeof override.envVar, `${name}.${key}.envOverrides.${env}.envVar`).toBe('string');
          }
          if (override.required !== undefined) {
            expect(typeof override.required, `${name}.${key}.envOverrides.${env}.required`).toBe('boolean');
          }
          if (override.default !== undefined) {
            expect(typeof override.default, `${name}.${key}.envOverrides.${env}.default`).toBe('string');
          }
        }
      }
    }
  }
}

describe('@secretdef/* community packages', () => {
  // Import all packages and validate their structure
  const packages = [
    'anthropic',
    'auth0',
    'aws',
    'clerk',
    'firebase',
    'gcp',
    'mixpanel',
    'neon',
    'openai',
    'paypal',
    'planetscale',
    'postmark',
    'resend',
    'segment',
    'sendgrid',
    'stripe',
    'supabase',
    'turso',
    'twilio',
  ];

  for (const pkg of packages) {
    it(`@secretdef/${pkg} exports valid secret specs`, async () => {
      // Use relative path since we're in the monorepo
      const mod = await import(`../../../@secretdef/${pkg}/index.ts`);
      expect(mod.secrets, `@secretdef/${pkg} must export 'secrets'`).toBeDefined();
      assertValidSecrets(`@secretdef/${pkg}`, mod.secrets);
    });
  }
});
