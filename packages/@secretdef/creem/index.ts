import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CREEM_API_KEY: {
    description: 'Creem API key',
    dashboard: 'https://creem.io',
  },
});
