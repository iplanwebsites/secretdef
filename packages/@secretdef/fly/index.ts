import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FLY_API_TOKEN: {
    description: 'Fly.io API token',
    dashboard: 'https://fly.io/user/personal_access_tokens',
  },
});
