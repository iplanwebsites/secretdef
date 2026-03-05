import type { GeneratedSecret } from './types';

/**
 * Generates a copy-pasteable defineSecrets() call from the current secrets.
 * Includes all spec-level fields (description, group, example, etc.)
 * Adds comment lines above each secret with source file, status, and env var info.
 */
export function secretsToSpec(secrets: [string, GeneratedSecret][]): string {
  const lines: string[] = [];
  lines.push('import { defineSecrets } from "secretdef";');
  lines.push('');
  lines.push('export const secrets = defineSecrets({');

  for (let i = 0; i < secrets.length; i++) {
    const [key, sec] = secrets[i];
    const props = buildProps(key, sec);

    // Comment line with source + status metadata
    const commentParts: string[] = [];
    if (sec.registeredBy) commentParts.push(sec.registeredBy);
    commentParts.push(sec.status === 'ok' ? 'configured' : sec.status);
    if (sec.envVar !== key) commentParts.push(`env: ${sec.envVar}`);
    lines.push(`  // ${commentParts.join(' | ')}`);

    if (props.length === 1 && !props[0].key) {
      // Single-prop shorthand: just a string description
      lines.push(`  ${key}: ${props[0].value},`);
    } else {
      lines.push(`  ${key}: {`);
      for (const p of props) {
        lines.push(`    ${p.key}: ${p.value},`);
      }
      lines.push(`  },`);
    }
  }

  lines.push('});');
  lines.push('');
  return lines.join('\n');
}

interface Prop {
  key: string;
  value: string;
}

function buildProps(key: string, sec: GeneratedSecret): Prop[] {
  const props: Prop[] = [];

  if (sec.description) {
    props.push({ key: 'description', value: quote(sec.description) });
  }

  if (sec.dashboard) {
    props.push({ key: 'dashboard', value: quote(sec.dashboard) });
  }

  // Only include required if explicitly false (true is the default)
  if (sec.required === false) {
    props.push({ key: 'required', value: 'false' });
  }

  if (sec.validate) {
    props.push({ key: 'validate', value: quote(sec.validate) });
  }

  if (sec.choices && sec.choices.length > 0) {
    props.push({ key: 'choices', value: `[${sec.choices.map(quote).join(', ')}]` });
  }

  if (sec.example) {
    props.push({ key: 'example', value: quote(sec.example) });
  }

  if (sec.devDefault) {
    props.push({ key: 'devDefault', value: quote(sec.devDefault) });
  }

  if (sec.group) {
    props.push({ key: 'group', value: quote(sec.group) });
  }

  if (sec.environments && Object.keys(sec.environments).length > 0) {
    props.push({ key: 'environments', value: formatEnvironments(sec.environments) });
  }

  // If description is the only prop (no dashboard), allow shorthand
  if (props.length === 1 && props[0].key === 'description') {
    return [{ key: '', value: quote(sec.description!) }];
  }

  return props;
}

function formatEnvironments(
  envs: Record<string, { envVar?: string; required?: boolean; default?: string }>,
): string {
  const entries = Object.entries(envs);
  if (entries.length === 0) return '{}';

  const parts: string[] = [];
  for (const [envName, cfg] of entries) {
    const inner: string[] = [];
    if (cfg.envVar) inner.push(`envVar: ${quote(cfg.envVar)}`);
    if (cfg.required !== undefined) inner.push(`required: ${cfg.required}`);
    if (cfg.default) inner.push(`default: ${quote(cfg.default)}`);
    parts.push(`${envName}: { ${inner.join(', ')} }`);
  }

  if (parts.length === 1) {
    return `{ ${parts[0]} }`;
  }

  return `{\n      ${parts.join(',\n      ')},\n    }`;
}

function quote(s: string): string {
  const escaped = s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  return `"${escaped}"`;
}
