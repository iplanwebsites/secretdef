import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BATON_API_KEY: {
    description: 'Baton API key',
    dashboard: 'https://baton.io',
  },
});
