import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BINANCE_API_KEY: {
    description: 'Binance API key',
    dashboard: 'https://www.binance.com/en/my/settings/api-management',
  },
  BINANCE_API_SECRET: {
    description: 'Binance API secret',
    dashboard: 'https://www.binance.com/en/my/settings/api-management',
  },
});
