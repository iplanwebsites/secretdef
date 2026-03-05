import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ADZUNA_APP_ID: {
    description: 'Adzuna application ID',
    dashboard: 'https://developer.adzuna.com',
  },
  ADZUNA_APP_KEY: {
    description: 'Adzuna application key',
    dashboard: 'https://developer.adzuna.com',
  },
});
