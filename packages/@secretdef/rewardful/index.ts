import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  REWARDFUL_API_SECRET: {
    description: 'Rewardful API secret',
    dashboard: 'https://www.rewardful.com',
  },
});
