import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DATA_GOV_API_KEY: {
    description: 'Data.gov API key',
    dashboard: 'https://api.data.gov/signup/',
  },
});
