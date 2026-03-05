import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WEALTHSIMPLE_CLIENT_ID: {
    description: 'Wealthsimple client ID',
    dashboard: 'https://www.wealthsimple.com',
  },
  WEALTHSIMPLE_CLIENT_SECRET: {
    description: 'Wealthsimple client secret',
    dashboard: 'https://www.wealthsimple.com',
  },
});
