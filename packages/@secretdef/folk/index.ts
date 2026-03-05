import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FOLK_API_KEY: {
    description: 'Folk CRM API key',
    dashboard: 'https://app.folk.app',
  },
});
