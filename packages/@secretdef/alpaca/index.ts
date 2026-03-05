import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ALPACA_API_KEY_ID: {
    description: 'Alpaca API key ID',
    dashboard: 'https://app.alpaca.markets/paper/dashboard/overview',
  },
  ALPACA_SECRET_KEY: {
    description: 'Alpaca secret key',
    dashboard: 'https://app.alpaca.markets/paper/dashboard/overview',
  },
});
