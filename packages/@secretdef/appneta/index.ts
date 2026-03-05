import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  APPNETA_API_KEY: {
    description: 'AppNeta API key',
    dashboard: 'https://www.appneta.com',
  },
});
