import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SITE24X7_API_KEY: {
    description: 'Site24x7 API key',
    dashboard: 'https://www.site24x7.com/app/client',
  },
});
