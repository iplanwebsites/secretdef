import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TIPALTI_API_KEY: {
    description: 'Tipalti API key',
    dashboard: 'https://tipalti.com',
  },
  TIPALTI_PAYER_NAME: {
    description: 'Tipalti payer name',
    dashboard: 'https://tipalti.com',
  },
});
