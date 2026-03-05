import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLAY_API_KEY: {
    description: 'Clay API key',
    dashboard: 'https://www.clay.com',
  },
});
