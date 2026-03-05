import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COINMARKETCAP_API_KEY: {
    description: 'CoinMarketCap API key',
    dashboard: 'https://pro.coinmarketcap.com/account',
  },
});
