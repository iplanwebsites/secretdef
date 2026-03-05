import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CUSTOMERIO_SITE_ID: {
    description: 'Customer.io site ID',
    dashboard: 'https://fly.customer.io/settings/api_credentials',
  },
  CUSTOMERIO_API_KEY: {
    description: 'Customer.io API key',
    dashboard: 'https://fly.customer.io/settings/api_credentials',
  },
  CUSTOMERIO_APP_API_KEY: {
    description: 'Customer.io App API key',
    dashboard: 'https://fly.customer.io/settings/api_credentials',
    required: false,
  },
});
