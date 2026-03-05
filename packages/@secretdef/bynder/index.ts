import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BYNDER_DOMAIN: {
    description: 'Bynder portal domain',
    dashboard: 'https://bynder.com',
  },
  BYNDER_CLIENT_ID: {
    description: 'Bynder OAuth client ID',
    dashboard: 'https://bynder.com',
  },
  BYNDER_CLIENT_SECRET: {
    description: 'Bynder OAuth client secret',
    dashboard: 'https://bynder.com',
  },
});
