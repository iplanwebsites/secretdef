import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLOCKIFY_API_KEY: {
    description: 'Clockify API key',
    dashboard: 'https://app.clockify.me/user/settings',
  },
});
