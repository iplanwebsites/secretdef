import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  POLLFISH_API_KEY: {
    description: 'Pollfish API key',
    dashboard: 'https://www.pollfish.com/dashboard',
  },
});
