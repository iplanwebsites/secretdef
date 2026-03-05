import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SOCURE_API_KEY: {
    description: 'Socure API key',
    dashboard: 'https://developer.socure.com',
  },
});
