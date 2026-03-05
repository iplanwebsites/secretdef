import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MEDIASTACK_API_KEY: {
    description: 'Mediastack API key',
    dashboard: 'https://mediastack.com/dashboard',
  },
});
