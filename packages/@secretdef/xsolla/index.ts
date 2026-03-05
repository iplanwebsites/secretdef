import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  XSOLLA_MERCHANT_ID: {
    description: 'Xsolla merchant ID',
    dashboard: 'https://publisher.xsolla.com',
  },
  XSOLLA_API_KEY: {
    description: 'Xsolla API key',
    dashboard: 'https://publisher.xsolla.com',
  },
});
