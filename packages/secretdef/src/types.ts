/** Built-in validator names (adapted from envalid) */
export type BuiltinValidator = 'str' | 'bool' | 'num' | 'email' | 'host' | 'port' | 'url' | 'json';

/** Custom validator: takes raw string, returns cleaned value or throws */
export type CustomValidator = (input: string) => unknown;

/** Accept either a built-in name or a custom function */
export type SecretValidation = BuiltinValidator | CustomValidator;

export interface SecretSpec {
  description?: string;
  required?: boolean;
  validate?: SecretValidation;
  /** Allowlist of valid values. Checked after validation (if any). */
  choices?: readonly string[];
  /** Example value shown in error messages (e.g. "sk_live_...") */
  example?: string;
  /** Default value used only when NODE_ENV is not 'production'. Shortcut for environments.development.default. */
  devDefault?: string;
  /** Group/tag for organizing secrets in validation output (e.g. "payments", "auth") */
  group?: string;
  environments?: Partial<
    Record<
      string,
      {
        envVar?: string;
        required?: boolean;
        default?: string;
      }
    >
  >;
}

/** A SecretSpec or a plain string (shorthand for `{ description: "..." }`) */
export type SecretInput = SecretSpec | string;

export interface RegisteredSecret extends SecretSpec {
  registeredBy: string;
}

export interface ValidateOptions {
  mode?: 'error' | 'warn';
}

/** Extracts a typed env object from defineSecrets output. Maps every key to string. */
export type EnvFrom<T extends Record<string, SecretSpec | SecretInput>> = {
  [K in keyof T]: string;
};
