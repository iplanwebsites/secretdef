import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  APPCUES_ACCOUNT_ID: {
    description: 'Appcues account ID',
    dashboard: 'https://studio.appcues.com',
  },
});
