import type { SecretSpec, SecretInput } from './types.js';
import { autoRegisterSpecs } from './registry.js';
import { normalizeSpecs } from './normalize.js';

export type { SecretSpec, SecretInput, RegisteredSecret, ValidateOptions, BuiltinValidator, CustomValidator, SecretValidation, EnvFrom } from './types.js';
export { validateSecrets } from './validate.js';
export type { ValidatedSecrets } from './validate.js';
export { useSecret, SecretNotAvailableError, SecretValidationError } from './accessor.js';
export { enableAutoRegister, getRegistry, clearRegistry } from './registry.js';
export { builtinValidators } from './validators.js';
export { normalizeSpecs } from './normalize.js';
export { findProjectRoot, listGeneratedFiles } from './generated.js';

/**
 * Declares secret requirements. Always returns normalized SecretSpec objects
 * and auto-registers them to the global registry.
 *
 * Values can be a SecretSpec object or a plain string (shorthand for `{ description: "..." }`).
 * SDK authors call this once — consumers decide how to wire it up.
 */
export function defineSecrets<T extends Record<string, SecretInput>>(
  specs: T,
): { [K in keyof T]: SecretSpec } {
  const normalized = normalizeSpecs(specs);
  autoRegisterSpecs(normalized);
  return normalized;
}
