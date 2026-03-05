import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OPENSEA_API_KEY: {
    description: 'OpenSea API key',
    dashboard: 'https://docs.opensea.io/reference/api-keys',
  },
});
