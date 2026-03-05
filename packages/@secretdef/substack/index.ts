import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SUBSTACK_API_TOKEN: {
    description: 'Substack API token',
    dashboard: 'https://substack.com',
  },
});
