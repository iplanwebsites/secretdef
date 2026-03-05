import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ALLOY_API_KEY: {
    description: 'Alloy identity verification API key',
    dashboard: 'https://dashboard.alloy.com',
  },
  ALLOY_API_SECRET: {
    description: 'Alloy API secret',
    dashboard: 'https://dashboard.alloy.com',
  },
});
