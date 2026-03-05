import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BRIGHT_DATA_API_TOKEN: {
    description: 'Bright Data API token',
    dashboard: 'https://brightdata.com/cp/zones',
  },
});
