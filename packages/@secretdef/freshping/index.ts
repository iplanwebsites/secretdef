import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FRESHPING_API_KEY: {
    description: 'Freshping API key',
    dashboard: 'https://app.freshping.io',
  },
});
