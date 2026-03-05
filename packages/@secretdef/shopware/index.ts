import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SHOPWARE_ACCESS_KEY: {
    description: 'Shopware API access key',
    dashboard: 'https://shopware.com',
  },
  SHOPWARE_SECRET_KEY: {
    description: 'Shopware API secret key',
    dashboard: 'https://shopware.com',
  },
  SHOPWARE_URL: {
    description: 'Shopware instance URL',
    dashboard: 'https://shopware.com',
    validate: 'url',
    required: false,
  },
});
