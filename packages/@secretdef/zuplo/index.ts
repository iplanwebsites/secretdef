import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZUPLO_API_KEY: {
    description: 'Zuplo API key',
    dashboard: 'https://zuplo.com',
  },
});
