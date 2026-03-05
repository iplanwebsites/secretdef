import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  IEX_CLOUD_API_TOKEN: {
    description: 'IEX Cloud API token',
    dashboard: 'https://iexcloud.io/console/tokens',
  },
});
