/**
 * Example: Combining your own secrets with @secretdef/* community packages
 *
 * In a real project you'd `npm i @secretdef/stripe` and import from there.
 * This example uses a relative path since we're inside the monorepo.
 *
 * Run: npx tsx example/with-community-package.ts
 */
import { validateSecrets, useSecret } from 'secretdef';

// 1. Import community package + your own secrets
//    In your app: await import('@secretdef/stripe');
await import('../../@secretdef/stripe/index.js');
await import('./secrets.js');

// 2. Validate everything — community + custom
const env = validateSecrets();

console.log('Resolved secrets:', env);

// 3. Use any registered secret
try {
  const stripeKey = useSecret('STRIPE_SECRET_KEY');
  console.log('STRIPE_SECRET_KEY:', stripeKey);
} catch (err) {
  console.error(String(err));
}
