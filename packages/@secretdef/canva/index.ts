import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CANVA_API_KEY: {
    description: 'Canva Connect API key',
    dashboard: 'https://www.canva.com/developers',
  },
});
