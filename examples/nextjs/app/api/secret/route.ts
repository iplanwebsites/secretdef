import { NextResponse } from 'next/server';
import { useSecret } from 'secretdef';
import { secrets } from '../../../secrets';

export function GET() {
  try {
    const value = useSecret('API_KEY', secrets);
    return NextResponse.json({ API_KEY: value });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
