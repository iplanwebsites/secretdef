import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CRITEO_CLIENT_ID: {
    description: 'Criteo client ID',
    dashboard: 'https://marketing.criteo.com',
  },
  CRITEO_CLIENT_SECRET: {
    description: 'Criteo client secret',
    dashboard: 'https://marketing.criteo.com',
  },
});
