import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  POSTGRES_URL: {
    description: 'Vercel Postgres connection URL',
    dashboard: 'https://vercel.com/dashboard/stores',
    validate: 'url',
  },
});
