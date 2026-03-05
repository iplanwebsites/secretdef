import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FONDY_MERCHANT_ID: {
    description: 'Fondy merchant ID',
    dashboard: 'https://portal.fondy.eu',
  },
  FONDY_PAYMENT_KEY: {
    description: 'Fondy payment key',
    dashboard: 'https://portal.fondy.eu',
  },
});
