import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DRIP_API_KEY: {
    description: 'Drip API key',
    dashboard: 'https://www.getdrip.com/user/edit',
  },
  DRIP_ACCOUNT_ID: {
    description: 'Drip account ID',
    dashboard: 'https://www.getdrip.com',
  },
});
