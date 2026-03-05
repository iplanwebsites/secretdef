import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BACKENDLESS_APP_ID: {
    description: 'Backendless application ID',
    dashboard: 'https://develop.backendless.com',
  },
  BACKENDLESS_API_KEY: {
    description: 'Backendless API key',
    dashboard: 'https://develop.backendless.com',
  },
});
