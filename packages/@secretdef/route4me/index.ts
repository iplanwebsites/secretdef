import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ROUTE4ME_API_KEY: {
    description: 'Route4Me API key',
    dashboard: 'https://route4me.com',
  },
});
