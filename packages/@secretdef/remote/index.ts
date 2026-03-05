import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  REMOTE_API_TOKEN: {
    description: 'Remote.com API token',
    dashboard: 'https://remote.com/dashboard/developer-hub',
  },
});
