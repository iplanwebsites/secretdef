import fs from 'fs';
import path from 'path';
import { parse } from 'yaml';

export type SdkPackageEntry = {
  name: string;
  npm: string;
  category: string;
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
