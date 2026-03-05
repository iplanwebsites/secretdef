import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GEOAPIFY_API_KEY: {
    description: 'Geoapify API key',
    dashboard: 'https://myprojects.geoapify.com',
  },
});
