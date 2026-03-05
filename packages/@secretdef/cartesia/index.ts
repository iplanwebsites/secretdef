import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CARTESIA_API_KEY: {
    description: 'Cartesia API key',
    dashboard: 'https://play.cartesia.ai/keys',
  },
});
