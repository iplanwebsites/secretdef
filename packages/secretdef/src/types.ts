export interface SecretSpec {
  envVar: string;
  description?: string;
  required?: boolean;
  envOverrides?: Partial<
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

export interface RegisteredSecret extends SecretSpec {
  registeredBy: string;
}

export interface ValidateOptions {
  mode?: 'error' | 'warn';
}
