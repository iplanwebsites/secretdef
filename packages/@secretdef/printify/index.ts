import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PRINTIFY_API_TOKEN: {
    description: 'Printify API token',
    dashboard: 'https://printify.com/app/account/api',
  },
});
