import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OPENCAGE_API_KEY: {
    description: 'OpenCage geocoding API key',
    dashboard: 'https://opencagedata.com/dashboard#api-keys',
  },
});
