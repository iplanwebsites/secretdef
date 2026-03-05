import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZENPHI_API_KEY: {
    description: 'Zenphi API key',
    dashboard: 'https://zenphi.com',
  },
});
