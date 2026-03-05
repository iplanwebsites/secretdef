import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NORDLAYER_API_TOKEN: {
    description: 'NordLayer API token',
    dashboard: 'https://nordlayer.com',
  },
});
