import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ALPHA_VANTAGE_API_KEY: {
    description: 'Alpha Vantage API key',
    dashboard: 'https://www.alphavantage.co/support/#api-key',
  },
});
