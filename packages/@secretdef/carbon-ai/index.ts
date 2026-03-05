import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CARBON_API_KEY: {
    description: 'Carbon AI API key',
    dashboard: 'https://dashboard.carbon.ai',
  },
});
