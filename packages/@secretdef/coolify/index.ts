import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COOLIFY_API_KEY: {
    description: 'Coolify API key',
    dashboard: 'https://coolify.io',
  },
  COOLIFY_API_URL: {
    description: 'Coolify API URL',
    dashboard: 'https://coolify.io',
    validate: 'url',
  },
});
