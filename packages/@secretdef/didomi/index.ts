import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DIDOMI_API_KEY: {
    description: 'Didomi API key',
    dashboard: 'https://console.didomi.io',
  },
  DIDOMI_SECRET_KEY: {
    description: 'Didomi secret key',
    dashboard: 'https://console.didomi.io',
  },
});
