import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COINGECKO_API_KEY: {
    description: 'CoinGecko Pro API key',
    dashboard: 'https://www.coingecko.com/en/api/pricing',
  },
});
