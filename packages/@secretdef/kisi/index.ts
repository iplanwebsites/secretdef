import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KISI_API_KEY: {
    description: 'Kisi API key',
    dashboard: 'https://web.kisi.io',
  },
});
