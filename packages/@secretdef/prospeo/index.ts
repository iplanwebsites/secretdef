import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PROSPEO_API_KEY: {
    description: 'Prospeo API key',
    dashboard: 'https://prospeo.io/api',
  },
});
