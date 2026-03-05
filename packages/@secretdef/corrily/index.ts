import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CORRILY_API_KEY: {
    description: 'Corrily pricing API key',
    dashboard: 'https://app.corrily.com',
  },
});
