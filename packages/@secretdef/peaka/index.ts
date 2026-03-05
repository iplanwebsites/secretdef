import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PEAKA_API_KEY: {
    description: 'Peaka API key',
    dashboard: 'https://peaka.com',
  },
});
