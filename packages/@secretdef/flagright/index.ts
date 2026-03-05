import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FLAGRIGHT_API_KEY: {
    description: 'Flagright API key',
    dashboard: 'https://dashboard.flagright.com',
  },
});
