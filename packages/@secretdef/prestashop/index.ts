import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PRESTASHOP_API_KEY: {
    description: 'PrestaShop webservice API key',
    dashboard: 'https://prestashop.com',
  },
  PRESTASHOP_API_URL: {
    description: 'PrestaShop store URL',
    dashboard: 'https://prestashop.com',
    validate: 'url',
  },
});
