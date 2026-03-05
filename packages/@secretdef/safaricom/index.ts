import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MPESA_CONSUMER_KEY: {
    description: 'M-Pesa consumer key',
    dashboard: 'https://developer.safaricom.co.ke',
  },
  MPESA_CONSUMER_SECRET: {
    description: 'M-Pesa consumer secret',
    dashboard: 'https://developer.safaricom.co.ke',
  },
  MPESA_PASSKEY: {
    description: 'M-Pesa passkey',
    dashboard: 'https://developer.safaricom.co.ke',
    required: false,
  },
});
