import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OSANO_CUSTOMER_ID: {
    description: 'Osano customer ID',
    dashboard: 'https://www.osano.com',
  },
});
