import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VECTARA_CUSTOMER_ID: {
    description: 'Vectara customer ID',
    dashboard: 'https://console.vectara.com',
  },
  VECTARA_API_KEY: {
    description: 'Vectara API key',
    dashboard: 'https://console.vectara.com',
  },
});
