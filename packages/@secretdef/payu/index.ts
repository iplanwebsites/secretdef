import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PAYU_MERCHANT_KEY: {
    description: 'PayU merchant key',
    dashboard: 'https://developer.payu.in',
  },
  PAYU_MERCHANT_SALT: {
    description: 'PayU merchant salt',
    dashboard: 'https://developer.payu.in',
  },
});
