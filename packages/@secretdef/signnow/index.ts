import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SIGNNOW_CLIENT_ID: {
    description: 'signNow OAuth client ID',
    dashboard: 'https://www.signnow.com/api',
  },
  SIGNNOW_CLIENT_SECRET: {
    description: 'signNow OAuth client secret',
    dashboard: 'https://www.signnow.com/api',
  },
});
