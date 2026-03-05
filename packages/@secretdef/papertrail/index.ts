import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PAPERTRAIL_API_TOKEN: {
    description: 'Papertrail API token',
    dashboard: 'https://papertrailapp.com/account/profile',
  },
});
