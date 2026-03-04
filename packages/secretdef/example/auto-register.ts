/**
 * Example: Auto-register style
 *
 * Run: npx tsx example/auto-register.ts
 *
 * Try with/without env vars:
 *   API_KEY=my-key npx tsx example/auto-register.ts
 */
import { enableAutoRegister, validateSecrets, useSecret } from 'secretdef';

// 1. Enable auto-register before importing secret definitions
enableAutoRegister();

// 2. Import modules that call defineSecrets — they auto-register
//    Using dynamic import because ESM hoists static imports above enableAutoRegister()
await import('./secrets.js');

// 3. Validate everything at once
const env = validateSecrets();

console.log('Resolved secrets:', env);

// 4. Access individual secrets later
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
