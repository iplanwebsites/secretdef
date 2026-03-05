import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NOTIFICATIONAPI_CLIENT_ID: {
    description: 'NotificationAPI client ID',
    dashboard: 'https://app.notificationapi.com',
  },
  NOTIFICATIONAPI_CLIENT_SECRET: {
    description: 'NotificationAPI client secret',
    dashboard: 'https://app.notificationapi.com',
  },
});
