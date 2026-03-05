import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LUNCHMONEY_ACCESS_TOKEN: {
    description: 'Lunch Money API access token',
    dashboard: 'https://my.lunchmoney.app/developers',
  },
});
