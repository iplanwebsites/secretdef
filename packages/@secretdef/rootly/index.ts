import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ROOTLY_API_KEY: {
    description: 'Rootly API key',
    dashboard: 'https://rootly.com',
  },
});
