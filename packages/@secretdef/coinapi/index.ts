import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COINAPI_KEY: {
    description: 'CoinAPI key',
    dashboard: 'https://www.coinapi.io',
  },
});
