import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  APILAYER_API_KEY: {
    description: 'APILayer API key',
    dashboard: 'https://apilayer.com',
  },
});
