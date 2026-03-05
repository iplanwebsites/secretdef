import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ATHENS_API_KEY: {
    description: 'Athens Research API key',
    dashboard: 'https://athensresearch.io',
  },
});
