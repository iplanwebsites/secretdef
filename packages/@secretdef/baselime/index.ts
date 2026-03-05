import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BASELIME_API_KEY: {
    description: 'Baselime API key',
    dashboard: 'https://console.baselime.io',
  },
});
