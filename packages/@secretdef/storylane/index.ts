import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STORYLANE_API_KEY: {
    description: 'Storylane API key',
    dashboard: 'https://app.storylane.io',
  },
});
