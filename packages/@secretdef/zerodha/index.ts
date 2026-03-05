import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KITE_API_KEY: {
    description: 'Zerodha Kite Connect API key',
    dashboard: 'https://kite.trade',
  },
  KITE_API_SECRET: {
    description: 'Zerodha Kite Connect API secret',
    dashboard: 'https://kite.trade',
  },
});
