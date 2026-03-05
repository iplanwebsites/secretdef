import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CHATTERMILL_API_KEY: {
    description: 'Chattermill API key',
    dashboard: 'https://www.chattermill.com',
  },
});
