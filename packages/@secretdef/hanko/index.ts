import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HANKO_API_URL: {
    description: 'Hanko API URL',
    dashboard: 'https://cloud.hanko.io',
    validate: 'url',
  },
});
