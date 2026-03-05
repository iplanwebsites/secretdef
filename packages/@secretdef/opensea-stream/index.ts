import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OPENSEA_STREAM_API_KEY: {
    description: 'OpenSea stream API key',
    dashboard: 'https://docs.opensea.io/reference/stream-api-overview',
  },
});
