import { describe, it, expect, beforeEach } from 'vitest';
import { readdirSync } from 'fs';
import { join } from 'path';
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
    // Key should be a valid env var name (UPPERCASE_SNAKE_CASE)
    expect(key, `${name}.${key} should be UPPER_SNAKE_CASE`).toMatch(/^[A-Z][A-Z0-9_]*$/);

    // description should be present
    expect(spec.description, `${name}.${key} should have description`).toBeTruthy();

    // description should contain a URL
    expect(
      spec.description,
      `${name}.${key}.description should contain a URL`,
    ).toMatch(/https?:\/\//);

    // If environments exists, it should be an object
    if (spec.environments) {
      expect(typeof spec.environments).toBe('object');
      for (const [env, override] of Object.entries(spec.environments)) {
        if (override) {
          // Override fields should be valid types
          if (override.envVar !== undefined) {
            expect(typeof override.envVar, `${name}.${key}.environments.${env}.envVar`).toBe('string');
          }
          if (override.required !== undefined) {
            expect(typeof override.required, `${name}.${key}.environments.${env}.required`).toBe('boolean');
          }
          if (override.default !== undefined) {
            expect(typeof override.default, `${name}.${key}.environments.${env}.default`).toBe('string');
          }
        }
      }
    }
  }
}

describe('@secretdef/* community packages', () => {
  // Dynamically discover packages from the filesystem
  const packagesDir = join(__dirname, '..', '..', '..', '@secretdef');
  const packages = readdirSync(packagesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  for (const pkg of packages) {
    it(`@secretdef/${pkg} exports valid secret specs`, async () => {
      // Use relative path since we're in the monorepo
      const mod = await import(`../../../@secretdef/${pkg}/index.ts`);
      expect(mod.secrets, `@secretdef/${pkg} must export 'secrets'`).toBeDefined();
      assertValidSecrets(`@secretdef/${pkg}`, mod.secrets);
    });
  }
});
