import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ETSY_API_KEY: {
    description: 'Etsy API key',
    dashboard: 'https://www.etsy.com/developers/your-apps',
  },
  ETSY_ACCESS_TOKEN: {
    description: 'Etsy OAuth access token',
    dashboard: 'https://www.etsy.com/developers/your-apps',
  },
});
