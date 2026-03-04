import type { SecretSpec, SecretInput } from './types.js';

/** Normalize a single SecretInput (string or object) to a SecretSpec */
export function normalizeSpec(input: SecretInput): SecretSpec {
  if (typeof input === 'string') {
    return { description: input };
  }
  return input;
}

/** Normalize a map of SecretInput values to SecretSpec objects */
export function normalizeSpecs<T extends Record<string, SecretInput>>(
  specs: T,
): { [K in keyof T]: SecretSpec } {
  const result: Record<string, SecretSpec> = {};
  for (const [key, input] of Object.entries(specs)) {
    result[key] = normalizeSpec(input);
  }
  return result as { [K in keyof T]: SecretSpec };
}
