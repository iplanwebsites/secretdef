import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MEDUSA_BACKEND_URL: {
    description: 'Medusa backend URL',
    dashboard: 'https://medusajs.com',
    validate: 'url',
  },
  MEDUSA_PUBLISHABLE_KEY: {
    description: 'Medusa publishable API key',
    dashboard: 'https://medusajs.com',
    required: false,
  },
});
