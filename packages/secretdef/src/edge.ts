/**
 * Edge runtime support for secretdef
 *
 * For runtimes without process.env (Cloudflare Workers, Deno Deploy, etc.),
 * this module provides helpers that accept a custom env source.
 */

import type { SecretSpec, ValidateOptions } from './types.js';
import { resolveSecret, type ResolvedInfo } from './resolve.js';

export interface EdgeValidateOptions extends ValidateOptions {
  /** Custom environment object (e.g., Cloudflare Worker bindings) */
  env: Record<string, string | undefined>;
  /** Environment name override (defaults to 'production' for safety in edge) */
  nodeEnv?: string;
  /** Called when validation fails, instead of process.exit */
  onError?: (errors: EdgeValidationError[]) => void;
}

export interface EdgeValidationError {
  key: string;
  envVar: string;
  type: 'missing' | 'invalid';
  message: string;
  description?: string;
  example?: string;
  dashboard?: string;
}

export interface EdgeValidatedSecrets {
  [key: string]: string;
}

/**
 * Validates secrets using a custom env source.
 * Designed for edge runtimes without process.env.
 *
 * @example
 * // Cloudflare Workers with Hono
 * app.use("*", async (c, next) => {
 *   const validated = validateSecretsEdge(secrets, {
 *     env: c.env,
 *     onError: (errors) => {
 *       console.error("Missing secrets:", errors);
 *       // Don't exit - just log and let routes handle it
 *     }
 *   });
 *   c.set("secrets", validated);
 *   await next();
 * });
 */
export function validateSecretsEdge(
  specs: Record<string, SecretSpec>,
  options: EdgeValidateOptions
): EdgeValidatedSecrets {
  const { env, nodeEnv = 'production', onError, mode } = options;
  const effectiveMode = mode ?? (nodeEnv === 'production' ? 'error' : 'warn');

  const missing: ResolvedInfo[] = [];
  const invalid: ResolvedInfo[] = [];
  const resolved: EdgeValidatedSecrets = {};

  for (const [key, spec] of Object.entries(specs)) {
    const info = resolveSecret(key, spec, nodeEnv, env);

    if (info.missing) {
      missing.push(info);
    } else if (info.validationError) {
      invalid.push(info);
    } else if (info.value !== undefined) {
      resolved[key] = info.value;
    }
  }

  const problems = [...missing, ...invalid];

  if (problems.length > 0) {
    const errors: EdgeValidationError[] = problems.map((info) => ({
      key: info.key,
      envVar: info.envVar,
      type: info.missing ? 'missing' : 'invalid',
      message: info.missing
        ? `Missing required secret: ${info.envVar}`
        : `Invalid secret ${info.envVar}: ${info.validationError}`,
      description: info.spec.description,
      example: info.spec.example,
      dashboard: info.spec.dashboard,
    }));

    if (onError) {
      onError(errors);
    } else if (effectiveMode === 'error') {
      // In edge runtimes, we can't call process.exit, so throw instead
      const lines = [
        `secretdef: ${errors.length} secret problem(s):`,
        ...errors.map((e) => `  - ${e.message}`),
      ];
      throw new Error(lines.join('\n'));
    } else {
      // Warn mode - log and continue
      console.warn(`secretdef: ${errors.length} secret problem(s) - will throw if accessed`);
      for (const e of errors) {
        console.warn(`  - ${e.message}`);
      }
    }
  }

  return resolved;
}

/**
 * Reads a single secret from a custom env source.
 * For edge runtimes without process.env.
 *
 * @example
 * // Cloudflare Workers
 * const apiKey = useSecretEdge("API_KEY", secrets, c.env);
 */
export function useSecretEdge(
  key: string,
  specs: Record<string, SecretSpec>,
  env: Record<string, string | undefined>,
  nodeEnv: string = 'production'
): string {
  const spec = specs[key];
  if (!spec) {
    throw new Error(
      `secretdef: Unknown secret key "${key}". ` +
        `It is not present in the passed specs map.`
    );
  }

  const info = resolveSecret(key, spec, nodeEnv, env);

  if (info.validationError) {
    throw new EdgeSecretValidationError(key, spec, nodeEnv, info.validationError);
  }

  if (info.value !== undefined) {
    return info.value;
  }

  throw new EdgeSecretNotAvailableError(key, spec, nodeEnv);
}

/**
 * Creates a scoped secret accessor bound to a specific env source.
 * Useful for middleware that wants to provide a secrets helper.
 *
 * @example
 * const getSecret = createEdgeAccessor(secrets, c.env);
 * const apiKey = getSecret("API_KEY");
 */
export function createEdgeAccessor(
  specs: Record<string, SecretSpec>,
  env: Record<string, string | undefined>,
  nodeEnv: string = 'production'
): (key: string) => string {
  return (key: string) => useSecretEdge(key, specs, env, nodeEnv);
}

export class EdgeSecretValidationError extends Error {
  readonly secretKey: string;
  readonly envVar: string;
  readonly environment: string;

  constructor(key: string, spec: SecretSpec, env: string, validationError: string) {
    const envVar = spec.environments?.[env]?.envVar ?? key;

    const lines: string[] = [
      `SecretValidationError: ${key} failed validation.`,
      '',
      `  Environment variable: ${envVar}`,
      `  Validation error:     ${validationError}`,
    ];

    if (spec.description) {
      lines.push(`  Description:          ${spec.description}`);
    }
    if (spec.dashboard) {
      lines.push(`  Dashboard:            ${spec.dashboard}`);
    }
    if (spec.example) {
      lines.push(`  Example:              ${spec.example}`);
    }
    lines.push(`  Current environment:  ${env}`);
    lines.push('');
    lines.push(`  To fix: update the value of ${envVar} to pass validation.`);

    super(lines.join('\n'));
    this.name = 'EdgeSecretValidationError';
    this.secretKey = key;
    this.envVar = envVar;
    this.environment = env;
  }
}

export class EdgeSecretNotAvailableError extends Error {
  readonly secretKey: string;
  readonly envVar: string;
  readonly environment: string;

  constructor(key: string, spec: SecretSpec, env: string) {
    const envVar = spec.environments?.[env]?.envVar ?? key;

    const lines: string[] = [
      `SecretNotAvailable: ${key} is not configured.`,
      '',
      `  Environment variable: ${envVar}`,
    ];

    if (spec.description) {
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

    if (spec.dashboard) {
      lines.push(`  Dashboard:            ${spec.dashboard}`);
    }
    if (spec.example) {
      lines.push(`  Example:              ${spec.example}`);
    }
    lines.push(`  Current environment:  ${env}`);
    lines.push('');

    // Edge-specific guidance
    lines.push('  To fix in Cloudflare Workers:');
    lines.push(`    wrangler secret put ${envVar}`);
    lines.push('');
    lines.push('  For local development, add to .dev.vars:');
    lines.push(`    ${envVar}=<value>`);

    super(lines.join('\n'));
    this.name = 'EdgeSecretNotAvailableError';
    this.secretKey = key;
    this.envVar = envVar;
    this.environment = env;
  }
}
