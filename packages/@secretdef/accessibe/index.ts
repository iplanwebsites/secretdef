import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ACCESSIBE_API_KEY: {
    description: 'accessiBe API key',
    dashboard: 'https://accessibe.com',
  },
});
