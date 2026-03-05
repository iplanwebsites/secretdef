import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CAISY_API_KEY: {
    description: 'Caisy API key',
    dashboard: 'https://app.caisy.io',
  },
});
