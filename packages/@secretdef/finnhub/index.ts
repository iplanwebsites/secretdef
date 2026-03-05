import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FINNHUB_API_KEY: {
    description: 'Finnhub stock API key',
    dashboard: 'https://finnhub.io/dashboard',
  },
});
