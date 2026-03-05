import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WEGLOT_API_KEY: {
    description: 'Weglot API key',
    dashboard: 'https://dashboard.weglot.com',
  },
});
