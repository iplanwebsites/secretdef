import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TURSO_DATABASE_URL: {
    envVar: 'TURSO_DATABASE_URL',
    description: 'Turso database URL — https://turso.tech/app',
  },
  TURSO_AUTH_TOKEN: {
    envVar: 'TURSO_AUTH_TOKEN',
    description: 'Turso auth token — https://turso.tech/app',
  },
});
