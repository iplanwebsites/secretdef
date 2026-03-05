import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BIGCOMMERCE_STORE_HASH: {
    description: 'BigCommerce store hash',
    dashboard: 'https://developer.bigcommerce.com',
  },
  BIGCOMMERCE_ACCESS_TOKEN: {
    description: 'BigCommerce API access token',
    dashboard: 'https://developer.bigcommerce.com',
  },
});
