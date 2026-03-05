import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SONDER_API_KEY: {
    description: 'Sonder API key',
    dashboard: 'https://sonder.io',
  },
});
