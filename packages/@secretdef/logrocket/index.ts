import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LOGROCKET_APP_ID: {
    description: 'LogRocket app ID',
    dashboard: 'https://app.logrocket.com',
  },
});
