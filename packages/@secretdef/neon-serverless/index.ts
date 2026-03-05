import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NEON_DATABASE_URL: {
    description: 'Neon serverless connection string',
    dashboard: 'https://console.neon.tech',
    validate: 'url',
  },
});
