import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FIXER_API_KEY: {
    description: 'Fixer.io API key',
    dashboard: 'https://fixer.io/dashboard',
  },
});
