import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DEVHUB_API_KEY: {
    description: 'DevHub API key',
    dashboard: 'https://devhub.io',
  },
});
