import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COINSTATS_API_KEY: {
    description: 'CoinStats API key',
    dashboard: 'https://openapi.coinstats.app',
  },
});
