import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GECKOBOARD_API_KEY: {
    description: 'Geckoboard API key',
    dashboard: 'https://app.geckoboard.com/account/details',
  },
});
