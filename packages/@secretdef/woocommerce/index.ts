import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WOOCOMMERCE_URL: {
    description: 'WooCommerce store URL',
    dashboard: 'https://woocommerce.com',
    validate: 'url',
  },
  WOOCOMMERCE_KEY: {
    description: 'WooCommerce consumer key',
    dashboard: 'https://woocommerce.com',
  },
  WOOCOMMERCE_SECRET: {
    description: 'WooCommerce consumer secret',
    dashboard: 'https://woocommerce.com',
  },
});
