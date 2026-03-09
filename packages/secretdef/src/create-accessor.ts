import type { SecretSpec } from './types.js';
import { resolveSecret } from './resolve.js';
import { detectEnvSource } from './env-detect.js';
import { SecretNotAvailableError, SecretValidationError } from './accessor.js';

/**
 * Creates a scoped secret accessor bound to specific specs and an env source.
 * Returns a function that reads secrets by key — useful for middleware patterns.
 *
 * @example
 * ```ts
 * import { defineSecrets, createSecretAccessor } from "secretdef";
 *
 * const secrets = defineSecrets({ MY_KEY: { description: "API key" } });
 *
 * // In Hono middleware
 * app.use("*", (c, next) => {
 *   c.set("secrets", createSecretAccessor(secrets, c.env));
 *   return next();
 * });
 *
 * // In route handler
 * app.get("/api/foo", (c) => {
 *   const key = c.get("secrets")("MY_KEY");
 * });
 * ```
 */
export function createSecretAccessor<T extends Record<string, SecretSpec>>(
  specs: T,
  env: Record<string, unknown>,
  nodeEnv?: string,
): (key: keyof T & string) => string {
  const envSource = detectEnvSource(env);
  const currentEnv = nodeEnv ?? envSource['NODE_ENV'] ?? 'development';

  return (key: keyof T & string): string => {
    const spec = specs[key];
    if (!spec) {
      throw new Error(
        `secretdef: Unknown secret key "${key}". ` +
          `It is not present in the passed secrets map.`,
      );
    }
    const info = resolveSecret(key, spec, currentEnv, envSource);
    if (info.validationError) {
      throw new SecretValidationError(key, spec, currentEnv, info.validationError);
    }
    if (info.value !== undefined) return info.value;
    throw new SecretNotAvailableError(key, spec, currentEnv);
  };
}
