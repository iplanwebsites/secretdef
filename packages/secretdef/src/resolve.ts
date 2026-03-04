import type { SecretSpec } from './types.js';

export interface ResolvedInfo {
  key: string;
  spec: SecretSpec;
  envVar: string;
  required: boolean;
  defaultValue: string | undefined;
  value: string | undefined;
  missing: boolean;
  registeredBy?: string;
}

export function resolveSecret(
  key: string,
  spec: SecretSpec,
  env: string,
  processEnv: Record<string, string | undefined> = process.env,
  registeredBy?: string,
): ResolvedInfo {
  const override = spec.envOverrides?.[env];

  const envVar = override?.envVar ?? spec.envVar;
  const required = override?.required ?? spec.required ?? true;
  const defaultValue = override?.default;

  const rawValue = processEnv[envVar];
  const value = rawValue ?? defaultValue;
  const missing = required && value === undefined;

  return { key, spec, envVar, required, defaultValue, value, missing, registeredBy };
}
