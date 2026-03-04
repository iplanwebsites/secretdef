import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TURSO_DATABASE_URL: {
    description: 'Turso database URL — https://turso.tech/app',
  },
  TURSO_AUTH_TOKEN: {
    description: 'Turso auth token — https://turso.tech/app',
  },
});
