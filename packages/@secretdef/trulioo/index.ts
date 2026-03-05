import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TRULIOO_API_KEY: {
    description: 'Trulioo API key',
    dashboard: 'https://gateway.trulioo.com',
  },
});
