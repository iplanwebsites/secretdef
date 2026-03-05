import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RECHARGE_API_TOKEN: {
    description: 'Recharge API token',
    dashboard: 'https://apps.rechargepayments.com/developers',
  },
});
