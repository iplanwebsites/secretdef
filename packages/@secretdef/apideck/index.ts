import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  APIDECK_API_KEY: {
    description: 'Apideck API key',
    dashboard: 'https://app.apideck.com',
  },
  APIDECK_APP_ID: {
    description: 'Apideck application ID',
    dashboard: 'https://app.apideck.com',
  },
});
