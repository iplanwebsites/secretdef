import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  IP2LOCATION_API_KEY: {
    description: 'IP2Location API key',
    dashboard: 'https://www.ip2location.io/dashboard',
  },
});
