import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PAYONEER_PROGRAM_ID: {
    description: 'Payoneer program ID',
    dashboard: 'https://payouts.payoneer.com',
  },
  PAYONEER_USERNAME: {
    description: 'Payoneer API username',
    dashboard: 'https://payouts.payoneer.com',
  },
  PAYONEER_PASSWORD: {
    description: 'Payoneer API password',
    dashboard: 'https://payouts.payoneer.com',
  },
});
