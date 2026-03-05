import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PLACEKEY_API_KEY: {
    description: 'Placekey API key',
    dashboard: 'https://www.placekey.io',
  },
});
