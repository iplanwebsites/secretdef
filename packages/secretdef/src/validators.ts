import type { BuiltinValidator, SecretValidation } from './types.js';

function str(input: string): string {
  if (input.length === 0) throw new Error('Expected non-empty string');
  return input;
}

function bool(input: string): boolean {
  const val = input.toLowerCase();
  if (['true', 't', '1', 'yes', 'on'].includes(val)) return true;
  if (['false', 'f', '0', 'no', 'off'].includes(val)) return false;
  throw new Error(`Invalid boolean value: "${input}" (expected true/false/t/f/1/0/yes/no/on/off)`);
}

function num(input: string): number {
  const n = Number(input);
  if (isNaN(n)) throw new Error(`Invalid number: "${input}"`);
  return n;
}

function email(input: string): string {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
    throw new Error(`Invalid email address: "${input}"`);
  }
  return input;
}

// Adapted from envalid — simplified FQDN check
const isFQDN = (input: string): boolean => {
  if (!input.length) return false;
  const parts = input.split('.');
  for (const part of parts) {
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) return false;
    if (part[0] === '-' || part[part.length - 1] === '-') return false;
  }
  return true;
};

const ipv4Regex = /^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){3}$/;
const ipv6Regex = /^(([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}|([0-9a-f]{1,4}:)+:([0-9a-f]{1,4}:)*[0-9a-f]{1,4}|([0-9a-f]{1,4}:)*::([0-9a-f]{1,4}:)*[0-9a-f]{0,4}|::|(([0-9a-f]{1,4}:){1,6}|:):((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9]))(%[0-9a-z.\-:]+)?$/i;

const isIP = (input: string): boolean => {
  if (!input.length) return false;
  return ipv4Regex.test(input) || ipv6Regex.test(input);
};

function host(input: string): string {
  if (!input.length) throw new Error('Expected non-empty host');
  if (!isFQDN(input) && !isIP(input)) {
    throw new Error(`Invalid host (domain or IP): "${input}"`);
  }
  return input;
}

function port(input: string): number {
  const n = Number(input);
  if (!Number.isInteger(n) || n < 0 || n > 65535) {
    throw new Error(`Invalid port: "${input}" (expected integer 0-65535)`);
  }
  return n;
}

function url(input: string): string {
  try {
    new URL(input);
    return input;
  } catch {
    throw new Error(`Invalid URL: "${input}"`);
  }
}

function json(input: string): unknown {
  try {
    return JSON.parse(input);
  } catch {
    throw new Error(`Invalid JSON: "${input}"`);
  }
}

export const builtinValidators: Record<BuiltinValidator, (input: string) => unknown> = {
  str,
  bool,
  num,
  email,
  host,
  port,
  url,
  json,
};

/**
 * Runs validation on a raw value. Returns an error message on failure, undefined on success.
 */
export function runValidation(validate: SecretValidation, value: string): string | undefined {
  try {
    if (typeof validate === 'function') {
      validate(value);
    } else {
      const fn = builtinValidators[validate];
      if (!fn) return `Unknown validator: "${validate}"`;
      fn(value);
    }
    return undefined;
  } catch (err) {
    return err instanceof Error ? err.message : String(err);
  }
}

/**
 * Checks a value against an allowlist of choices. Returns error message on failure, undefined on success.
 */
export function checkChoices(value: string, choices: readonly string[]): string | undefined {
  if (!choices.includes(value)) {
    return `Value "${value}" not in allowed choices: [${choices.join(', ')}]`;
  }
  return undefined;
}
