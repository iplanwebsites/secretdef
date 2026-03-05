import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COINBASE_API_KEY: {
    description: 'Coinbase API key',
    dashboard: 'https://www.coinbase.com/settings/api',
  },
  COINBASE_API_SECRET: {
    description: 'Coinbase API secret',
    dashboard: 'https://www.coinbase.com/settings/api',
  },
});
