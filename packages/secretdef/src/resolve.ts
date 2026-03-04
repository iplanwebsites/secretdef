import type { SecretSpec } from './types.js';
import { runValidation, checkChoices } from './validators.js';

export interface ResolvedInfo {
  key: string;
  spec: SecretSpec;
  envVar: string;
  required: boolean;
  defaultValue: string | undefined;
  value: string | undefined;
  missing: boolean;
  validationError?: string;
  registeredBy?: string;
}

export function resolveSecret(
  key: string,
  spec: SecretSpec,
  env: string,
  processEnv: Record<string, string | undefined> = process.env,
  registeredBy?: string,
): ResolvedInfo {
  const override = spec.environments?.[env];
  const isProduction = env === 'production';

  const envVar = override?.envVar ?? key;
  const required = override?.required ?? spec.required ?? true;
  const envDefault = override?.default;

  // devDefault applies when not production and no env-specific default is set
  const defaultValue = envDefault ?? (!isProduction && spec.devDefault !== undefined ? spec.devDefault : undefined);

  const rawValue = processEnv[envVar];
  // Treat empty string as unset — an empty env var is never a valid secret
  const effectiveRaw = rawValue === '' ? undefined : rawValue;
  const value = effectiveRaw ?? defaultValue;
  const missing = required && value === undefined;

  let validationError: string | undefined;
  if (value !== undefined) {
    // Run type validation first
    if (spec.validate) {
      validationError = runValidation(spec.validate, value);
    }
    // Then check choices (only if type validation passed)
    if (!validationError && spec.choices) {
      validationError = checkChoices(value, spec.choices);
    }
  }

  return { key, spec, envVar, required, defaultValue, value, missing, validationError, registeredBy };
}
