import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STENOGRAPHY_API_KEY: {
    description: 'Stenography API key',
    dashboard: 'https://stenography.dev',
  },
});
