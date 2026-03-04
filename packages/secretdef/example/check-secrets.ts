/**
 * Example: pnpm script to validate secrets without booting the app
 *
 * In your app's env/config module, add an early exit:
 *
 *   enableAutoRegister();
 *   validateSecrets(defineSecrets({ ... }));
 *   if (process.env.CHECK_SECRETS_ONLY === "1") process.exit(0);
 *
 * Then create a script like this one and add to package.json:
 *
 *   "secrets:check": "npx tsx scripts/check-secrets.ts"
 *
 * Run: npx tsx example/check-secrets.ts
 * Try:
 *   DATABASE_URL=postgres://localhost/mydb npx tsx example/check-secrets.ts
 */
// If using dotenv, load it here:
// import 'dotenv/config';

// This flag tells the app module to exit after validation
process.env.CHECK_SECRETS_ONLY = '1';

// Import the module that declares and validates secrets.
// It will call validateSecrets(), print any problems, then exit.
import('./app-with-check.js').catch((err) => {
  console.error('Failed to load secrets:', err.message);
  process.exit(1);
});
