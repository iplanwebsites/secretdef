import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BUNNY_API_KEY: {
    description: 'Bunny.net API key',
    dashboard: 'https://dash.bunny.net/account/apikey',
  },
  BUNNY_STORAGE_ZONE_NAME: {
    description: 'Bunny.net storage zone name',
    dashboard: 'https://dash.bunny.net',
    required: false,
  },
  BUNNY_STORAGE_PASSWORD: {
    description: 'Bunny.net storage password',
    dashboard: 'https://dash.bunny.net',
    required: false,
  },
});
