import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NASA_API_KEY: {
    description: 'NASA API key',
    dashboard: 'https://api.nasa.gov',
  },
});
