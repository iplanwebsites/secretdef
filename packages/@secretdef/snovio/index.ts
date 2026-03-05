import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SNOVIO_USER_ID: {
    description: 'Snov.io user ID',
    dashboard: 'https://snov.io/api',
  },
  SNOVIO_API_KEY: {
    description: 'Snov.io API key',
    dashboard: 'https://snov.io/api',
  },
});
