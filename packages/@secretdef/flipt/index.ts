import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FLIPT_API_TOKEN: {
    description: 'Flipt API token',
    dashboard: 'https://flipt.io',
  },
});
