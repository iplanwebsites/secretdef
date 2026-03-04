import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  API_KEY: {
    description: 'Main API key — https://example.com/settings',
    environments: {
      development: { default: 'dev-key-123' },
    },
  },
  DATABASE_URL: {
    description: 'Database connection string — https://example.com/db',
  },
});
