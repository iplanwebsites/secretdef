import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DATAWARE_API_KEY: {
    description: 'Dataware API key',
    dashboard: 'https://dataware.io',
  },
});
