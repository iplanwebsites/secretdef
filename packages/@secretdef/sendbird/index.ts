import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SENDBIRD_APP_ID: {
    description: 'Sendbird application ID',
    dashboard: 'https://dashboard.sendbird.com',
  },
  SENDBIRD_API_TOKEN: {
    description: 'Sendbird API token',
    dashboard: 'https://dashboard.sendbird.com',
  },
});
