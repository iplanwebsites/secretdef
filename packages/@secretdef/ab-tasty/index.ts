import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AB_TASTY_API_KEY: {
    description: 'AB Tasty API key',
    dashboard: 'https://app.abtasty.com',
  },
});
