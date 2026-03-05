import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PLAYFAB_TITLE_ID: {
    description: 'PlayFab title ID',
    dashboard: 'https://developer.playfab.com',
  },
  PLAYFAB_SECRET_KEY: {
    description: 'PlayFab developer secret key',
    dashboard: 'https://developer.playfab.com',
  },
});
