import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KEYPUP_API_KEY: {
    description: 'Keypup API key',
    dashboard: 'https://keypup.io',
  },
});
