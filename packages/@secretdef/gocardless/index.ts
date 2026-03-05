import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GOCARDLESS_ACCESS_TOKEN: {
    description: 'GoCardless access token',
    dashboard: 'https://manage.gocardless.com/developers/access-tokens',
  },
  GOCARDLESS_ENVIRONMENT: {
    description: 'GoCardless environment (sandbox or live)',
    dashboard: 'https://manage.gocardless.com',
    required: false,
  },
});
