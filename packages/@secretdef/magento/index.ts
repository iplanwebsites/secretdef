import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MAGENTO_BASE_URL: {
    description: 'Magento store base URL',
    dashboard: 'https://magento.com',
    validate: 'url',
  },
  MAGENTO_ACCESS_TOKEN: {
    description: 'Magento integration access token',
    dashboard: 'https://magento.com',
  },
});
