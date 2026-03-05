export interface GeneratedSecret {
  description?: string;
  dashboard?: string;
  required: boolean;
  group?: string;
  example?: string;
  devDefault?: string;
  choices?: string[];
  environments?: Record<string, { envVar?: string; required?: boolean; default?: string }>;
  registeredBy?: string;
  envVar: string;
  hasValue: boolean;
  status: 'ok' | 'missing' | 'invalid';
  validationError?: string;
  validate?: string;
}

export interface Snapshot {
  version: number;
  generatedAt: string;
  environment: string;
  cwd: string;
  entryFile: string;
  label: string;
  secrets: Record<string, GeneratedSecret>;
}

export interface EnvValue {
  value: string | null;
  masked: string;
}

export interface SecretsResponse {
  snapshots: Snapshot[];
  notes: Record<string, string>;
  envValues: Record<string, EnvValue>;
}

export interface MetaResponse {
  cwd: string;
  version: string;
}

export type ViewMode = 'table' | 'cards' | 'spec';
