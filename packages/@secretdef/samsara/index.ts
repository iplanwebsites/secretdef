import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SAMSARA_API_TOKEN: {
    description: 'Samsara API token',
    dashboard: 'https://cloud.samsara.com',
  },
});
