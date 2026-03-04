import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DATABASE_URL: {
    description: 'Neon Postgres connection string — https://console.neon.tech',
  },
});
