import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TOGETHER_API_KEY: {
    description: 'Together AI API key',
    dashboard: 'https://api.together.xyz/settings/api-keys',
  },
});
