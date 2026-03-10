/**
 * Edge runtime helpers — thin wrappers around the main APIs.
 *
 * You don't need this module! The main `useSecret` and `validateSecrets`
 * functions auto-detect the runtime and accept a custom `{ env }` source.
 *
 * This module is kept for convenience and explicit imports:
 *   import { createSecretAccessor } from "secretdef/edge";
 *
 * @deprecated Prefer using the main secretdef imports with `{ env: c.env }`.
 */

export { useSecret, SecretNotAvailableError, SecretValidationError } from './accessor.js';
export type { UseSecretOptions } from './accessor.js';
export { validateSecrets } from './validate.js';
export type { ValidatedSecrets } from './validate.js';
export { createSecretAccessor } from './create-accessor.js';
export { detectEnvSource } from './env-detect.js';
