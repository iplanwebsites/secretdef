import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FRED_API_KEY: {
    description: 'FRED economic data API key',
    dashboard: 'https://fred.stlouisfed.org/docs/api/api_key.html',
  },
});
