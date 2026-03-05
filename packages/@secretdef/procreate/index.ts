import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PROCREATE_API_KEY: {
    description: 'Procreate API key',
    dashboard: 'https://procreate.com',
  },
});
