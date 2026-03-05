import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FORTER_SITE_ID: {
    description: 'Forter site ID',
    dashboard: 'https://portal.forter.com',
  },
  FORTER_SECRET_KEY: {
    description: 'Forter secret key',
    dashboard: 'https://portal.forter.com',
  },
});
