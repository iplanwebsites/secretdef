import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BANANA_API_KEY: {
    description: 'Banana API key',
    dashboard: 'https://app.banana.dev',
  },
});
