import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MULTIVERSX_API_KEY: {
    description: 'MultiversX API key',
    dashboard: 'https://multiversx.com',
  },
});
