import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  EPCC_CLIENT_ID: {
    description: 'Elastic Path Commerce Cloud client ID',
    dashboard: 'https://euwest.cm.elasticpath.com',
  },
  EPCC_CLIENT_SECRET: {
    description: 'Elastic Path Commerce Cloud client secret',
    dashboard: 'https://euwest.cm.elasticpath.com',
  },
});
