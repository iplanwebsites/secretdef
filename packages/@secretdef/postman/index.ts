import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  POSTMAN_API_KEY: {
    description: 'Postman API key',
    dashboard: 'https://web.postman.co/settings/me/api-keys',
  },
});
