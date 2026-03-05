import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RISKIFIED_SHOP_DOMAIN: {
    description: 'Riskified shop domain',
    dashboard: 'https://app.riskified.com',
  },
  RISKIFIED_AUTH_TOKEN: {
    description: 'Riskified auth token',
    dashboard: 'https://app.riskified.com',
  },
});
