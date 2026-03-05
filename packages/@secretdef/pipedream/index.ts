import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PD_API_KEY: {
    description: 'Pipedream API key',
    dashboard: 'https://pipedream.com/accounts',
  },
});
