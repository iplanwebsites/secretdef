import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  XANO_API_KEY: {
    description: 'Xano API key',
    dashboard: 'https://xano.com',
  },
});
