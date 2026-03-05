import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FACEBOOK_APP_ID: {
    description: 'Facebook app ID',
    dashboard: 'https://developers.facebook.com/apps',
  },
  FACEBOOK_APP_SECRET: {
    description: 'Facebook app secret',
    dashboard: 'https://developers.facebook.com/apps',
  },
});
