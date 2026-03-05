import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  INSTAGRAM_ACCESS_TOKEN: {
    description: 'Instagram Graph API access token',
    dashboard: 'https://developers.facebook.com/apps',
  },
});
