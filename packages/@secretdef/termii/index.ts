import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TERMII_API_KEY: {
    description: 'Termii API key',
    dashboard: 'https://accounts.termii.com',
  },
});
