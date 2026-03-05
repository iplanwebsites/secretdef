import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PACKAGECLOUD_TOKEN: {
    description: 'Packagecloud API token',
    dashboard: 'https://packagecloud.io/api_token',
  },
});
