/**
 * Example: App module that supports CHECK_SECRETS_ONLY mode
 *
 * This simulates a real app's env.ts / config.ts file.
 * Secrets are declared and validated inline — no separate files needed.
 */
import { defineSecrets, validateSecrets } from 'secretdef';

validateSecrets(defineSecrets({
  DATABASE_URL: 'PostgreSQL connection string',
  API_KEY: {
    description: 'Main API key',
    required: false,
    group: 'api',
  },
  STRIPE_SECRET_KEY: {
    description: 'Stripe API secret key — https://dashboard.stripe.com/apikeys',
    required: false,
    group: 'payments',
  },
}));

// Exit early if we're just checking secrets
if (process.env.CHECK_SECRETS_ONLY === '1') {
  process.exit(0);
}

// ... rest of app startup (DB connections, server listen, etc.)
console.log('App started successfully!');
