import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NUVEI_MERCHANT_ID: {
    description: 'Nuvei merchant ID',
    dashboard: 'https://dashboard.nuvei.com',
  },
  NUVEI_MERCHANT_SITE_ID: {
    description: 'Nuvei merchant site ID',
    dashboard: 'https://dashboard.nuvei.com',
  },
  NUVEI_SECRET_KEY: {
    description: 'Nuvei secret key',
    dashboard: 'https://dashboard.nuvei.com',
  },
});
