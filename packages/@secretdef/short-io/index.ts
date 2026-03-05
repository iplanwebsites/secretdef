import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SHORTIO_API_KEY: {
    description: 'Short.io API key',
    dashboard: 'https://app.short.io/settings/api',
  },
});
