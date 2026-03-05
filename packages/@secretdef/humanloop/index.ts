import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HUMANLOOP_API_KEY: {
    description: 'Humanloop API key',
    dashboard: 'https://app.humanloop.com',
  },
});
