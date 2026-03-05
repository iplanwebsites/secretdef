import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FIREWORKS_API_KEY: {
    description: 'Fireworks AI API key',
    dashboard: 'https://fireworks.ai/account/api-keys',
  },
});
