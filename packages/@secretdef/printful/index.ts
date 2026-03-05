import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PRINTFUL_API_KEY: {
    description: 'Printful API key',
    dashboard: 'https://www.printful.com/dashboard/developer/api',
  },
});
