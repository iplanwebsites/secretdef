import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  EXOTEL_API_KEY: {
    description: 'Exotel API key',
    dashboard: 'https://my.exotel.com',
  },
  EXOTEL_API_TOKEN: {
    description: 'Exotel API token',
    dashboard: 'https://my.exotel.com',
  },
  EXOTEL_SID: {
    description: 'Exotel account SID',
    dashboard: 'https://my.exotel.com',
  },
});
