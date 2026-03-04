import { NextResponse } from 'next/server';
import { useSecret } from 'secretdef';
import { secrets } from '../../../secrets';

export function GET() {
  try {
    // useSecret() reads a validated secret at runtime.
    // If the secret is missing, it throws SecretNotAvailableError
    // with actionable context (env var name, description, dashboard URL).
    const value = useSecret('API_KEY', secrets);
    return NextResponse.json({ API_KEY: value });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
