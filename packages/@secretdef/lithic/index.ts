import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LITHIC_API_KEY: {
    description: 'Lithic card issuing API key',
    dashboard: 'https://app.lithic.com',
  },
});
