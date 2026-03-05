import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STOCKX_API_KEY: {
    description: 'StockX API key',
    dashboard: 'https://developer.stockx.com',
  },
});
