import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  IPGEOLOCATION_API_KEY: {
    description: 'ipgeolocation API key',
    dashboard: 'https://app.ipgeolocation.io',
  },
});
