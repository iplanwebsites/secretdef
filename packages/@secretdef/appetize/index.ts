import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  APPETIZE_API_TOKEN: {
    description: 'Appetize API token',
    dashboard: 'https://appetize.io',
  },
});
