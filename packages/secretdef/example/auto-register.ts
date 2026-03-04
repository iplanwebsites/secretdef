/**
 * Example: Auto-register style
 *
 * Run: npx tsx example/auto-register.ts
 *
 * Try with/without env vars:
 *   API_KEY=my-key npx tsx example/auto-register.ts
 */
import { validateSecrets, useSecret } from 'secretdef';

// 1. Import modules that call defineSecrets — they auto-register
await import('./secrets.js');

// 2. Validate everything at once
const env = validateSecrets();

console.log('Resolved secrets:', env);

// 3. Access individual secrets later
try {
  const dbUrl = useSecret('DATABASE_URL');
  console.log('DATABASE_URL:', dbUrl);
} catch (err) {
  console.error(String(err));
}

try {
  const apiKey = useSecret('API_KEY');
  console.log('API_KEY:', apiKey);
} catch (err) {
  console.error(String(err));
}
