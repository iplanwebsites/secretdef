import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AI21_API_KEY: {
    description: 'AI21 Labs API key',
    dashboard: 'https://studio.ai21.com/account/api-key',
  },
});
