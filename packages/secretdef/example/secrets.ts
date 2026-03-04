/**
 * Example: Define your app's secret requirements.
 *
 * Run with: npx tsx example/auto-register.ts
 *           npx tsx example/explicit.ts
 */
import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DATABASE_URL: {
    description: 'Postgres connection string — format: postgresql://user:pass@host/db',
    environments: {
      development: { default: 'postgresql://localhost:5432/myapp_dev' },
    },
  },
  API_KEY: {
    description: 'Your internal API key — ask #platform-eng on Slack',
  },
  ANALYTICS_KEY: {
    description: 'Analytics write key — https://app.segment.com/settings/api-keys',
    required: false,
  },
});
