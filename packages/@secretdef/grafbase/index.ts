import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GRAFBASE_API_KEY: {
    description: 'Grafbase API key',
    dashboard: 'https://grafbase.com/dashboard',
  },
});
