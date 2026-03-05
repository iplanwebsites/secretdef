import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TAIGA_URL: {
    description: 'Taiga instance URL',
    dashboard: 'https://taiga.io',
    validate: 'url',
  },
  TAIGA_AUTH_TOKEN: {
    description: 'Taiga auth token',
    dashboard: 'https://taiga.io',
  },
});
