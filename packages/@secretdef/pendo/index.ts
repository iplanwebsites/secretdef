import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PENDO_API_KEY: {
    description: 'Pendo API key',
    dashboard: 'https://app.pendo.io/main/#/settings',
  },
});
