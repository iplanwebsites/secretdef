/**
 * Example: Explicit spreading style (no global state)
 *
 * Run: npx tsx example/explicit.ts
 *
 * Try with/without env vars:
 *   API_KEY=my-key npx tsx example/explicit.ts
 */
import { validateSecrets, useSecret } from 'secretdef';
import { secrets as app } from './secrets';

// Spread all your module secrets into a single call
const env = validateSecrets({ ...app });

console.log('Resolved secrets:', env);

// Access with explicit map — no global registry needed
try {
  const dbUrl = useSecret('DATABASE_URL', app);
  console.log('DATABASE_URL:', dbUrl);
} catch (err) {
  console.error(String(err));
}

try {
  const apiKey = useSecret('API_KEY', app);
  console.log('API_KEY:', apiKey);
} catch (err) {
  console.error(String(err));
}
