import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COINBASE_COMMERCE_API_KEY: {
    description: 'Coinbase Commerce API key',
    dashboard: 'https://commerce.coinbase.com/settings/security',
  },
  COINBASE_COMMERCE_WEBHOOK_SECRET: {
    description: 'Coinbase Commerce webhook secret',
    dashboard: 'https://commerce.coinbase.com/settings/security',
    required: false,
  },
});
