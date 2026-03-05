import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  APPMIXER_API_KEY: {
    description: 'Appmixer API key',
    dashboard: 'https://www.appmixer.com',
  },
  APPMIXER_BASE_URL: {
    description: 'Appmixer base URL',
    dashboard: 'https://www.appmixer.com',
    validate: 'url',
    required: false,
  },
});
