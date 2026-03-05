import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WORLDPAY_SERVICE_KEY: {
    description: 'Worldpay service key',
    dashboard: 'https://online.worldpay.com/settings/api',
  },
  WORLDPAY_CLIENT_KEY: {
    description: 'Worldpay client key',
    dashboard: 'https://online.worldpay.com/settings/api',
    required: false,
  },
});
