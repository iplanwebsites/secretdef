import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PLUNK_API_KEY: {
    description: 'Plunk email API key',
    dashboard: 'https://www.useplunk.com/settings',
  },
});
