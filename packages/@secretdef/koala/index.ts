import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KOALA_API_KEY: {
    description: 'Koala analytics API key',
    dashboard: 'https://app.getkoala.com',
  },
});
