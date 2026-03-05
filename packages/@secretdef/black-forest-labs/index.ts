import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BFL_API_KEY: {
    description: 'Black Forest Labs API key',
    dashboard: 'https://api.us1.bfl.ai',
  },
});
