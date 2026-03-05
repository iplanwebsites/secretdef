import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TURSO_DATABASE_URL: {
    description: 'Turso database URL',
    dashboard: 'https://turso.tech/app',
    validate: 'url',
  },
  TURSO_AUTH_TOKEN: {
    description: 'Turso auth token',
    dashboard: 'https://turso.tech/app',
  },
});
