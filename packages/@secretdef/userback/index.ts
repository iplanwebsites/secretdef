import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  USERBACK_ACCESS_TOKEN: {
    description: 'Userback access token',
    dashboard: 'https://app.userback.io',
  },
});
