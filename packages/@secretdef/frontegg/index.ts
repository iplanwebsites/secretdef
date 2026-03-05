import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FRONTEGG_CLIENT_ID: {
    description: 'Frontegg client ID',
    dashboard: 'https://portal.frontegg.com',
  },
  FRONTEGG_API_KEY: {
    description: 'Frontegg API key',
    dashboard: 'https://portal.frontegg.com',
  },
});
