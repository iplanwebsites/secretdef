import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PABBLY_API_KEY: {
    description: 'Pabbly API key',
    dashboard: 'https://www.pabbly.com',
  },
});
