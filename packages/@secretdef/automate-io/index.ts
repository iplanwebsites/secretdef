import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AUTOMATE_API_KEY: {
    description: 'Automate.io API key',
    dashboard: 'https://automate.io',
  },
});
