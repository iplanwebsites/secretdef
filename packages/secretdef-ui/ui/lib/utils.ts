import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Check if a registeredBy value is an actual file path (not [eval], <anonymous>, etc.) */
export function isRealFilePath(p: string): boolean {
  if (p.startsWith('/') || p.startsWith('.') || /^[a-zA-Z]:\\/.test(p)) return true;
  // Reject known synthetic values
  if (p.startsWith('[') || p.startsWith('<') || p === 'unknown') return false;
  // Accept relative paths that look like files (contain / or \ and have an extension)
  if ((p.includes('/') || p.includes('\\')) && /\.\w+$/.test(p)) return true;
  return false;
}

/** Resolve a potentially relative source path to absolute using the snapshot cwd */
export function resolveSourcePath(source: string, cwd: string): string {
  if (source.startsWith('/') || /^[a-zA-Z]:\\/.test(source)) return source;
  return `${cwd}/${source}`;
}
