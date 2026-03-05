import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TIPE_API_KEY: {
    description: 'Tipe CMS API key',
    dashboard: 'https://tipe.io',
  },
  TIPE_ORG_ID: {
    description: 'Tipe organization ID',
    dashboard: 'https://tipe.io',
  },
});
