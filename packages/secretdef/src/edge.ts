/**
 * Edge runtime support for secretdef.
 *
 * Works in Cloudflare Workers, Deno Deploy, Vercel Edge Functions,
 * and any other runtime where `process.env` is not available.
 *
 * Import from "secretdef/edge" or from the main "secretdef" package.
 */

import type { SecretSpec, SecretInput, ValidateOptions } from './types.js';
import { resolveSecret, type ResolvedInfo } from './resolve.js';
import { normalizeSpecs } from './normalize.js';
import { SecretNotAvailableError, SecretValidationError } from './accessor.js';

export interface EdgeValidateOptions extends ValidateOptions {
  /** The environment name (e.g. "production", "development"). Defaults to "production". */
  env?: string;
  /**
   * Called when validation problems are found in error mode.
   * By default throws an AggregateError. Override to customize error handling.
   */
  onError?: (problems: EdgeValidationProblem[]) => void;
}

export interface EdgeValidationProblem {
  key: string;
  envVar: string;
  type: 'missing' | 'invalid';
  description?: string;
  dashboard?: string;
  example?: string;
  validationError?: string;
}

export interface EdgeValidatedSecrets {
  [key: string]: string;
}

/**
 * Reads a single secret from a custom env source. Use in edge runtimes
 * where `process.env` is not available (e.g. Cloudflare Workers `c.env`).
 *
 * @param key - The secret key to read
 * @param specs - The secret specs map (from `defineSecrets()`)
 * @param env - The runtime env/bindings object (e.g. `c.env` in Hono)
 * @param nodeEnv - The environment name. Defaults to "production".
 *
 * @example
 * ```ts
 * import { defineSecrets } from "secretdef";
 * import { useSecretEdge } from "secretdef/edge";
 *
 * const secrets = defineSecrets({ MY_KEY: { description: "API key" } });
 *
 * app.get("/api/foo", (c) => {
 *   const key = useSecretEdge("MY_KEY", secrets, c.env);
 * });
 * ```
 */
export function useSecretEdge(
  key: string,
  specs: Record<string, SecretSpec>,
  env: Record<string, unknown>,
  nodeEnv = 'production',
): string {
  const spec = specs[key];
  if (!spec) {
    throw new Error(
      `secretdef: Unknown secret key "${key}". ` +
        `It is not present in the passed secrets map.`,
    );
  }

  const envRecord = toStringRecord(env);
  const info = resolveSecret(key, spec, nodeEnv, envRecord);

  if (info.validationError) {
    throw new SecretValidationError(key, spec, nodeEnv, info.validationError);
  }
  if (info.value !== undefined) return info.value;
  throw new SecretNotAvailableError(key, spec, nodeEnv);
}

/**
 * Validates all secrets against a custom env source. Use in edge runtimes.
 *
 * Unlike the Node.js `validateSecrets()`, this function:
 * - Never reads `process.env`
 * - Never calls `process.exit()`
 * - Never writes to the filesystem
 * - Defaults to "production" environment (since edge runtimes are typically deployed)
 *
 * @param specs - The secret specs map (from `defineSecrets()`)
 * @param env - The runtime env/bindings object
 * @param options - Validation options
 *
 * @example
 * ```ts
 * import { defineSecrets } from "secretdef";
 * import { validateSecretsEdge } from "secretdef/edge";
 *
 * const secrets = defineSecrets({ MY_KEY: { description: "API key" } });
 *
 * app.use("*", (c, next) => {
 *   validateSecretsEdge(secrets, c.env);
 *   return next();
 * });
 * ```
 */
export function validateSecretsEdge(
  specs: Record<string, SecretSpec>,
  env: Record<string, unknown>,
  options?: EdgeValidateOptions,
): EdgeValidatedSecrets {
  const currentEnv = options?.env ?? 'production';
  const isProduction = currentEnv === 'production';
  const mode = options?.mode ?? (isProduction ? 'error' : 'warn');

  const envRecord = toStringRecord(env);
  const resolved: EdgeValidatedSecrets = {};
  const problems: EdgeValidationProblem[] = [];

  for (const [key, spec] of Object.entries(specs)) {
    const info = resolveSecret(key, spec, currentEnv, envRecord);

    if (info.missing) {
      problems.push({
        key,
        envVar: info.envVar,
        type: 'missing',
        description: spec.description,
        dashboard: spec.dashboard,
        example: spec.example,
      });
    } else if (info.validationError) {
      problems.push({
        key,
        envVar: info.envVar,
        type: 'invalid',
        description: spec.description,
        dashboard: spec.dashboard,
        example: spec.example,
        validationError: info.validationError,
      });
    } else if (info.value !== undefined) {
      resolved[key] = info.value;
    }
  }

  if (problems.length > 0 && mode === 'error') {
    if (options?.onError) {
      options.onError(problems);
    } else {
      const lines = problems.map((p) => {
        const reason = p.type === 'missing' ? 'missing' : `invalid: ${p.validationError}`;
        return `  ${p.envVar} — ${reason}`;
      });
      throw new AggregateError(
        problems.map((p) =>
          p.type === 'missing'
            ? new SecretNotAvailableError(p.key, specs[p.key], currentEnv)
            : new SecretValidationError(p.key, specs[p.key], currentEnv, p.validationError!),
        ),
        `secretdef: ${problems.length} secret ${problems.length === 1 ? 'problem' : 'problems'} [env=${currentEnv}]:\n${lines.join('\n')}`,
      );
    }
  }

  return resolved;
}

/**
 * Creates a scoped secret accessor bound to specific specs and env bindings.
 * Returns a function that reads secrets by key.
 *
 * @example
 * ```ts
 * import { defineSecrets } from "secretdef";
 * import { createEdgeAccessor } from "secretdef/edge";
 *
 * const secrets = defineSecrets({ MY_KEY: { description: "API key" } });
 *
 * // In Hono middleware
 * app.use("*", (c, next) => {
 *   c.set("secrets", createEdgeAccessor(secrets, c.env));
 *   return next();
 * });
 *
 * // In route handler
 * app.get("/api/foo", (c) => {
 *   const key = c.get("secrets")("MY_KEY");
 * });
 * ```
 */
export function createEdgeAccessor<T extends Record<string, SecretSpec>>(
  specs: T,
  env: Record<string, unknown>,
  nodeEnv = 'production',
): (key: keyof T & string) => string {
  const envRecord = toStringRecord(env);
  return (key: keyof T & string): string => {
    const spec = specs[key];
    if (!spec) {
      throw new Error(
        `secretdef: Unknown secret key "${key}". ` +
          `It is not present in the passed secrets map.`,
      );
    }
    const info = resolveSecret(key, spec, nodeEnv, envRecord);
    if (info.validationError) {
      throw new SecretValidationError(key, spec, nodeEnv, info.validationError);
    }
    if (info.value !== undefined) return info.value;
    throw new SecretNotAvailableError(key, spec, nodeEnv);
  };
}

/**
 * Converts an env bindings object to a Record<string, string | undefined>.
 * Extracts only string values, skipping non-string bindings (D1Database, KVNamespace, etc).
 */
function toStringRecord(env: Record<string, unknown>): Record<string, string | undefined> {
  const result: Record<string, string | undefined> = {};
  for (const [key, value] of Object.entries(env)) {
    if (typeof value === 'string') {
      result[key] = value;
    }
  }
  return result;
}
