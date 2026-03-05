import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SALESBRICKS_API_KEY: {
    description: 'SalesBricks API key',
    dashboard: 'https://app.salesbricks.com',
  },
});
