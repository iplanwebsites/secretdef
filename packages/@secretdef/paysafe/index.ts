import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PAYSAFE_API_KEY: {
    description: 'Paysafe API key',
    dashboard: 'https://developer.paysafe.com',
  },
  PAYSAFE_ACCOUNT_ID: {
    description: 'Paysafe account ID',
    dashboard: 'https://developer.paysafe.com',
    required: false,
  },
});
