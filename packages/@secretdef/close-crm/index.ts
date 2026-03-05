import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLOSEIO_API_KEY: {
    description: 'Close CRM API key',
    dashboard: 'https://app.close.com/settings/api-keys',
  },
});
