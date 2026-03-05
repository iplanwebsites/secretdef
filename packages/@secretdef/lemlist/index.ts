import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LEMLIST_API_KEY: {
    description: 'Lemlist API key',
    dashboard: 'https://app.lemlist.com',
  },
});
