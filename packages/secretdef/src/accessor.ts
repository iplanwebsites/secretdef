import type { SecretSpec, RegisteredSecret } from './types.js';
import { getRegistry } from './registry.js';
import { resolveSecret } from './resolve.js';
import { detectEnvSource } from './env-detect.js';

export interface UseSecretOptions {
  /** Custom env source object (e.g. `c.env` in Cloudflare Workers / Hono).
   *  When omitted, auto-detects `process.env` if available. */
  env?: Record<string, unknown>;
}

/**
 * Reads a single secret by key. Throws a structured, actionable error if missing.
 *
 * Pass an explicit specs map, or omit to fall back to the auto-registry.
 * Pass `{ env: c.env }` to read from edge runtime bindings instead of `process.env`.
 *
 * @example
 * ```ts
 * // Node.js — uses process.env automatically
 * useSecret("MY_KEY", specs);
 *
 * // Cloudflare Workers — pass env source
 * useSecret("MY_KEY", specs, { env: c.env });
 * ```
 */
export function useSecret(
  key: string,
  resolvedMap?: Record<string, SecretSpec>,
  options?: UseSecretOptions,
): string {
  const envSource = detectEnvSource(options?.env);
  const env = getNodeEnv(envSource);

  // If an explicit map is passed, look up from it
  if (resolvedMap) {
    const spec = resolvedMap[key];
    if (!spec) {
      throw new Error(
        `secretdef: Unknown secret key "${key}". ` +
          `It is not present in the passed secrets map.`
      );
    }
    const info = resolveSecret(key, spec, env, envSource);
    if (info.validationError) {
      throw new SecretValidationError(key, spec, env, info.validationError);
    }
    if (info.value !== undefined) return info.value;
    throw new SecretNotAvailableError(key, spec, env);
  }

  // Fall back to auto-registry
  const registry = getRegistry();
  const registered = registry.get(key);

  if (!registered) {
    throw new Error(
      `secretdef: Unknown secret key "${key}". ` +
        `It has not been registered via defineSecrets(). ` +
        `Either pass an explicit map to useSecret, or make sure the module that defines it has been imported.`
    );
  }

  const info = resolveSecret(key, registered, env, envSource, registered.registeredBy);
  if (info.validationError) {
    throw new SecretValidationError(key, registered, env, info.validationError, registered.registeredBy);
  }
  if (info.value !== undefined) return info.value;
  throw new SecretNotAvailableError(key, registered, env, registered.registeredBy);
}

function getNodeEnv(envSource: Record<string, string | undefined>): string {
  return envSource['NODE_ENV'] ?? 'development';
}

export class SecretValidationError extends Error {
  readonly secretKey: string;
  readonly envVar: string;
  readonly environment: string;

  constructor(key: string, spec: SecretSpec, env: string, validationError: string, registeredBy?: string) {
    const override = spec.environments?.[env];
    const envVar = override?.envVar ?? key;

    const lines: string[] = [
      `SecretValidationError: ${key} failed validation.`,
      '',
      `  Environment variable: ${envVar}`,
      `  Validation error:     ${validationError}`,
    ];

    if (spec.description) {
      lines.push(`  Description:          ${spec.description}`);
    }
    if (spec.example) {
      lines.push(`  Example:              ${spec.example}`);
    }
    if (registeredBy) {
      lines.push(`  Defined in:           ${registeredBy}`);
    }
    lines.push(`  Current environment:  ${env}`);
    lines.push('');
    lines.push(`  To fix: update the value of ${envVar} to pass validation.`);

    super(lines.join('\n'));
    this.name = 'SecretValidationError';
    this.secretKey = key;
    this.envVar = envVar;
    this.environment = env;
  }
}

export class SecretNotAvailableError extends Error {
  readonly secretKey: string;
  readonly envVar: string;
  readonly environment: string;

  constructor(key: string, spec: SecretSpec, env: string, registeredBy?: string) {
    const override = spec.environments?.[env];
    const envVar = override?.envVar ?? key;

    const lines: string[] = [
      `SecretNotAvailable: ${key} is not configured.`,
      '',
      `  Environment variable: ${envVar}`,
    ];

    if (spec.description) {
      if (spec.dashboard) {
        lines.push(`  Description:          ${spec.description}`);
        lines.push(`  Where to find it:     ${spec.dashboard}`);
      } else {
        const urlMatch = spec.description.match(/https?:\/\/\S+/);
        if (urlMatch) {
          const descWithoutUrl = spec.description.replace(urlMatch[0], '').replace(/\s*—\s*$/, '').trim();
          if (descWithoutUrl) {
            lines.push(`  Description:          ${descWithoutUrl}`);
          }
          lines.push(`  Where to find it:     ${urlMatch[0]}`);
        } else {
          lines.push(`  Description:          ${spec.description}`);
        }
      }
    } else if (spec.dashboard) {
      lines.push(`  Where to find it:     ${spec.dashboard}`);
    }

    if (spec.example) {
      lines.push(`  Example:              ${spec.example}`);
    }
    if (registeredBy) {
      lines.push(`  Defined in:           ${registeredBy}`);
    }
    lines.push(`  Current environment:  ${env}`);
    lines.push('');
    lines.push(`  To fix: set ${envVar} in your environment or .env file.`);

    super(lines.join('\n'));
    this.name = 'SecretNotAvailableError';
    this.secretKey = key;
    this.envVar = envVar;
    this.environment = env;
  }
}
