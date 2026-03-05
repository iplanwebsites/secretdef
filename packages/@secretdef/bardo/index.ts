import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BARDO_API_KEY: {
    description: 'Bardo API key',
    dashboard: 'https://bardo.ai',
  },
});
