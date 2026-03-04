import { validateSecrets } from 'secretdef';
import { secrets } from './secrets';

// Next.js instrumentation hook — runs once at server startup.
// Validate all secrets here so missing env vars are caught immediately,
// not when a route handler happens to need one.
export function register() {
  validateSecrets(secrets);
}
