import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BITLY_ACCESS_TOKEN: {
    description: 'Bitly access token',
    dashboard: 'https://app.bitly.com/settings/api/',
  },
});
