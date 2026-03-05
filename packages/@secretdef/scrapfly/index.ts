import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SCRAPFLY_KEY: {
    description: 'Scrapfly API key',
    dashboard: 'https://scrapfly.io/dashboard',
  },
});
