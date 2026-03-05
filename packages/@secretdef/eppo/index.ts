import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  EPPO_API_KEY: {
    description: 'Eppo API key',
    dashboard: 'https://eppo.cloud',
  },
});
