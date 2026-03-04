/**
 * Extracts the caller's file path from a stack trace.
 * Used to auto-capture which file registered a secret definition.
 */
export function getCallerFile(): string {
  const err = new Error();
  const stack = err.stack;

  if (!stack) return '<unknown>';

  const lines = stack.split('\n');

  // Skip: Error, getCallerFile, register/defineSecrets
  // Find the first line that's not from this library
  for (let i = 3; i < lines.length; i++) {
    const line = lines[i].trim();

    // Skip internal frames
    if (line.includes('/secretdef/src/')) continue;
    if (line.includes('/secretdef/dist/')) continue;

    // Extract file path from common stack trace formats
    // V8: "at functionName (file:line:col)" or "at file:line:col"
    const v8Match = line.match(/\((.+?):\d+:\d+\)/) ?? line.match(/at\s+(.+?):\d+:\d+/);
    if (v8Match) {
      return cleanPath(v8Match[1]);
    }

    // SpiderMonkey/JavaScriptCore: "functionName@file:line:col"
    const smMatch = line.match(/@(.+?):\d+:\d+/);
    if (smMatch) {
      return cleanPath(smMatch[1]);
    }
  }

  return '<unknown>';
}

function cleanPath(filePath: string): string {
  // Remove file:// protocol
  let cleaned = filePath.replace(/^file:\/\//, '');

  // Try to make path relative to cwd
  try {
    const cwd = process.cwd();
    if (cleaned.startsWith(cwd)) {
      cleaned = cleaned.slice(cwd.length + 1);
    }
  } catch {
    // process.cwd() may not be available in all environments
  }

  return cleaned;
}
