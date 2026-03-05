import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PINTEREST_CLIENT_ID: {
    description: 'Pinterest app ID',
    dashboard: 'https://developers.pinterest.com/apps/',
  },
  PINTEREST_CLIENT_SECRET: {
    description: 'Pinterest app secret',
    dashboard: 'https://developers.pinterest.com/apps/',
  },
});
