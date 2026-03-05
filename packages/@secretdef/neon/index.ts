import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DATABASE_URL: {
    description: 'Neon Postgres connection string',
    dashboard: 'https://console.neon.tech',
  },
  PGHOST: {
    description: 'Postgres host (used by @neondatabase/serverless)',
    dashboard: 'https://console.neon.tech',
    required: false,
  },
});
