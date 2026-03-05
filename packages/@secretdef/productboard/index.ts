import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PRODUCTBOARD_API_TOKEN: {
    description: 'Productboard API token',
    dashboard: 'https://app.productboard.com',
  },
});
