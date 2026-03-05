import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LAGO_API_KEY: {
    description: 'Lago API key',
    dashboard: 'https://getlago.com',
  },
  LAGO_API_URL: {
    description: 'Lago API URL',
    dashboard: 'https://getlago.com',
    validate: 'url',
    required: false,
  },
});
