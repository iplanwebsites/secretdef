import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BC_API_KEY: {
    description: 'Bridgecrew/Checkov API key',
    dashboard: 'https://www.bridgecrew.cloud',
  },
});
