import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SEMRUSH_API_KEY: {
    description: 'Semrush API key',
    dashboard: 'https://www.semrush.com/accounts/profile/',
  },
});
