import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RAYGUN_API_KEY: {
    description: 'Raygun API key',
    dashboard: 'https://app.raygun.com',
  },
});
