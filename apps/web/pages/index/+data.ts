import fs from 'fs';
import path from 'path';

export type RegistryEntry = {
  name: string;       // e.g. "openai"
  title?: string;     // e.g. "OpenAI" (featured packages only)
  npm?: string;       // e.g. "openai" — source SDK package (featured only)
  featured?: boolean; // verified SDK with env vars
  top?: boolean;      // top-tier services — get rich cards
};

export type Integration = {
  name: string;        // e.g. "my-sdk"
  title: string;       // e.g. "My SDK"
  npm: string;         // e.g. "my-sdk"
  description: string; // short description
  repo?: string;       // e.g. "org/repo"
  website?: string;    // e.g. "https://my-sdk.com"
};

export type Data = {
  packages: RegistryEntry[];
  integrations: Integration[];
};

export function data(): Data {
  const registryPath = path.resolve(process.cwd(), 'data/registry.json');
  const packages = JSON.parse(fs.readFileSync(registryPath, 'utf-8')) as RegistryEntry[];

  const integrationsPath = path.resolve(process.cwd(), 'data/integrations.json');
  const integrations = JSON.parse(fs.readFileSync(integrationsPath, 'utf-8')) as Integration[];

  return { packages, integrations };
}
