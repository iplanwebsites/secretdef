import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WEBEX_ACCESS_TOKEN: {
    description: 'Webex access token',
    dashboard: 'https://developer.webex.com/my-apps',
  },
});
