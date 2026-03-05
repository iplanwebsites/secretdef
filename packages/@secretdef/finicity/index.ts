import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FINICITY_APP_KEY: {
    description: 'Finicity app key',
    dashboard: 'https://developer.finicity.com',
  },
  FINICITY_PARTNER_ID: {
    description: 'Finicity partner ID',
    dashboard: 'https://developer.finicity.com',
  },
  FINICITY_PARTNER_SECRET: {
    description: 'Finicity partner secret',
    dashboard: 'https://developer.finicity.com',
  },
});
