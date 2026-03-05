import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ADOBE_CLIENT_ID: {
    description: 'Adobe client ID',
    dashboard: 'https://developer.adobe.com/console',
  },
  ADOBE_CLIENT_SECRET: {
    description: 'Adobe client secret',
    dashboard: 'https://developer.adobe.com/console',
  },
});
