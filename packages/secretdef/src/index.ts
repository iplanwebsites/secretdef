import type { SecretSpec } from './types.js';
import { autoRegisterSpecs } from './registry.js';

export type { SecretSpec, RegisteredSecret, ValidateOptions } from './types.js';
export { validateSecrets } from './validate.js';
export type { ValidatedSecrets } from './validate.js';
export { useSecret, SecretNotAvailableError } from './accessor.js';
export { enableAutoRegister, getRegistry, clearRegistry } from './registry.js';

/**
 * Declares secret requirements. Always returns the input specs as pure data.
 *
 * If enableAutoRegister() has been called, also pushes specs into the global registry.
 * SDK authors call this once — consumers decide how to wire it up.
 */
export function defineSecrets<T extends Record<string, SecretSpec>>(
  specs: T,
): T {
  autoRegisterSpecs(specs);
  return specs;
}
