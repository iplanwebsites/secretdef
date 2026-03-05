import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BRIDGER_API_KEY: {
    description: 'Bridger API key',
    dashboard: 'https://bridger.io',
  },
});
