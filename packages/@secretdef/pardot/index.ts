import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PARDOT_CLIENT_ID: {
    description: 'Pardot client ID',
    dashboard: 'https://pi.pardot.com/api',
  },
  PARDOT_CLIENT_SECRET: {
    description: 'Pardot client secret',
    dashboard: 'https://pi.pardot.com/api',
  },
  PARDOT_BUSINESS_UNIT_ID: {
    description: 'Pardot business unit ID',
    dashboard: 'https://pi.pardot.com/api',
  },
});
