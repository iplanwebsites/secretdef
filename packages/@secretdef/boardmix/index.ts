import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BOARDMIX_API_KEY: {
    description: 'Boardmix API key',
    dashboard: 'https://boardmix.com',
  },
});
