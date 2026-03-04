import fs from 'fs';
import path from 'path';
import { parse } from 'yaml';

export type SdkPackageEntry = {
  name: string;
  title?: string;
  npm: string;
  category: string;
  repo?: string;
  hasEnvVars?: boolean;
  dateEvaluated?: string;
};

export type Data = {
  packages: SdkPackageEntry[];
};

export function data(): Data {
  const yamlPath = path.resolve(
    process.cwd(),
    '../../registry.yaml',
  );
  const raw = fs.readFileSync(yamlPath, 'utf-8');
  const parsed = parse(raw) as { packages: SdkPackageEntry[] };
  return { packages: parsed.packages };
}
