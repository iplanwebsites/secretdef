import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NEON_DATABASE_URL: {
    envVar: 'DATABASE_URL',
    description: 'Neon Postgres connection string — https://console.neon.tech',
  },
});
