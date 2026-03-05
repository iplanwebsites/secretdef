import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BANDWIDTH_USERNAME: {
    description: 'Bandwidth API username',
    dashboard: 'https://dashboard.bandwidth.com',
  },
  BANDWIDTH_PASSWORD: {
    description: 'Bandwidth API password',
    dashboard: 'https://dashboard.bandwidth.com',
  },
  BANDWIDTH_ACCOUNT_ID: {
    description: 'Bandwidth account ID',
    dashboard: 'https://dashboard.bandwidth.com',
  },
});
