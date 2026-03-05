import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VOUCHERIFY_APP_ID: {
    description: 'Voucherify app ID',
    dashboard: 'https://app.voucherify.io',
  },
  VOUCHERIFY_SECRET_KEY: {
    description: 'Voucherify secret key',
    dashboard: 'https://app.voucherify.io',
  },
});
