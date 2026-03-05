import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SPEAKEASY_API_KEY: {
    description: 'Speakeasy API key',
    dashboard: 'https://app.speakeasyapi.dev',
  },
});
