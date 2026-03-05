import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RAVEN_API_KEY: {
    description: 'Raven messaging API key',
    dashboard: 'https://ravenapp.dev',
  },
});
