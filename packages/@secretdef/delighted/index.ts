import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DELIGHTED_API_KEY: {
    description: 'Delighted NPS API key',
    dashboard: 'https://delighted.com/account/api',
  },
});
