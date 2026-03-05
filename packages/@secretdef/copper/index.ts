import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COPPER_API_KEY: {
    description: 'Copper API key',
    dashboard: 'https://app.copper.com/settings/api-keys',
  },
  COPPER_USER_EMAIL: {
    description: 'Copper user email',
    dashboard: 'https://app.copper.com',
  },
});
