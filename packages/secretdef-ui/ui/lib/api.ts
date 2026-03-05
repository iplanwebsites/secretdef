import type { SecretsResponse, MetaResponse } from './types';

const BASE = '';

export async function fetchSecrets(): Promise<SecretsResponse> {
  const res = await fetch(`${BASE}/api/secrets`);
  if (!res.ok) throw new Error(`Failed to fetch secrets: ${res.status}`);
  return res.json();
}

export async function fetchMeta(): Promise<MetaResponse> {
  const res = await fetch(`${BASE}/api/meta`);
  if (!res.ok) throw new Error(`Failed to fetch meta: ${res.status}`);
  return res.json();
}

export async function saveNote(key: string, note: string): Promise<void> {
  await fetch(`${BASE}/api/secrets/${encodeURIComponent(key)}/notes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ note }),
  });
}
