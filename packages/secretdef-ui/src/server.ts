import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// ui-dist is sibling to dist/ in the published package
const UI_DIR = join(__dirname, '..', 'ui-dist');

const MIME_TYPES: Record<string, string> = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function json(res: ServerResponse, data: unknown, status = 200) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

function notFound(res: ServerResponse) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
}

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => (data += chunk));
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

/** The project root can be overridden via --cwd flag; defaults to process.cwd() */
let _projectRoot: string | undefined;

export function setProjectRoot(root: string) {
  _projectRoot = root;
}

function getProjectRoot(): string {
  return _projectRoot ?? process.cwd();
}

function getSecretdefDir(): string {
  return join(getProjectRoot(), '.secretdef');
}

interface SnapshotData {
  secrets: Record<string, { envVar: string; [k: string]: unknown }>;
  [k: string]: unknown;
}

function loadAllSnapshots(): SnapshotData[] {
  const dir = getSecretdefDir();
  try {
    const files = readdirSync(dir)
      .filter((f) => f.startsWith('generated-') && f.endsWith('.json'))
      .sort();
    return files.map((f) => JSON.parse(readFileSync(join(dir, f), 'utf-8')));
  } catch {
    return [];
  }
}

/**
 * Reads current env values for all envVars across all snapshots.
 * Returns { envVar: maskedValue } and separately { envVar: rawValue }.
 * Only reads from process.env — same access as `printenv`.
 */
function readEnvValues(snapshots: SnapshotData[]): Record<string, { value: string | null; masked: string }> {
  const result: Record<string, { value: string | null; masked: string }> = {};
  for (const snap of snapshots) {
    for (const sec of Object.values(snap.secrets)) {
      const envVar = sec.envVar as string;
      if (result[envVar]) continue;
      const raw = process.env[envVar];
      if (raw !== undefined && raw !== '') {
        result[envVar] = { value: raw, masked: maskValue(raw) };
      } else {
        result[envVar] = { value: null, masked: '' };
      }
    }
  }
  return result;
}

function maskValue(v: string): string {
  if (v.length <= 4) return '\u2022'.repeat(v.length);
  if (v.length <= 8) return v.slice(0, 2) + '\u2022'.repeat(v.length - 2);
  return v.slice(0, 4) + '\u2022'.repeat(Math.min(v.length - 6, 8)) + v.slice(-2);
}

function loadNotes(): Record<string, string> {
  const file = join(getSecretdefDir(), 'notes.json');
  try {
    return JSON.parse(readFileSync(file, 'utf-8'));
  } catch {
    return {};
  }
}

function saveNotes(notes: Record<string, string>) {
  const dir = getSecretdefDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'notes.json'), JSON.stringify(notes, null, 2) + '\n');
}

function serveStatic(res: ServerResponse, urlPath: string): boolean {
  const filePath = urlPath === '/' ? '/index.html' : urlPath;
  const fullPath = join(UI_DIR, filePath);

  if (!fullPath.startsWith(UI_DIR)) {
    notFound(res);
    return true;
  }

  try {
    const content = readFileSync(fullPath);
    const ext = extname(fullPath);
    const mime = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime });
    res.end(content);
    return true;
  } catch {
    return false;
  }
}

/**
 * Checks that the request is actually coming from localhost.
 * Defends against DNS rebinding attacks where a malicious site resolves
 * its domain to 127.0.0.1 and tries to exfiltrate secrets via the browser.
 */
const ALLOWED_HOSTS = new Set(['localhost', '127.0.0.1', '[::1]']);

function isLocalRequest(req: IncomingMessage): boolean {
  const host = req.headers.host;
  if (!host) return false;
  // Strip port — "localhost:4100" → "localhost"
  const hostname = host.replace(/:\d+$/, '');
  return ALLOWED_HOSTS.has(hostname);
}

async function handleRequest(req: IncomingMessage, res: ServerResponse) {
  // Security: reject requests from non-local hosts (DNS rebinding protection)
  if (!isLocalRequest(req)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden: secretdef ui only serves localhost');
    return;
  }

  const url = new URL(req.url || '/', `http://localhost`);
  const path = url.pathname;

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API routes
  if (path === '/api/secrets' && req.method === 'GET') {
    const snapshots = loadAllSnapshots();
    const notes = loadNotes();
    const envValues = readEnvValues(snapshots);
    json(res, { snapshots, notes, envValues });
    return;
  }

  if (path === '/api/meta' && req.method === 'GET') {
    json(res, { cwd: getProjectRoot(), version: '0.0.1' });
    return;
  }

  if (path.startsWith('/api/secrets/') && path.endsWith('/notes') && req.method === 'POST') {
    const key = decodeURIComponent(path.slice('/api/secrets/'.length, -'/notes'.length));
    try {
      const body = JSON.parse(await readBody(req));
      const notes = loadNotes();
      if (body.note) {
        notes[key] = body.note;
      } else {
        delete notes[key];
      }
      saveNotes(notes);
      json(res, { ok: true });
    } catch {
      json(res, { error: 'Invalid JSON' }, 400);
    }
    return;
  }

  // Static file serving
  if (!path.startsWith('/api/')) {
    if (serveStatic(res, path)) return;
    if (!extname(path)) {
      if (serveStatic(res, '/')) return;
    }
  }

  notFound(res);
}

export function startServer(port: number) {
  const server = createServer((req, res) => {
    handleRequest(req, res).catch((err) => {
      console.error('Request error:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal server error');
    });
  });

  server.listen(port, '127.0.0.1');
  return server;
}
