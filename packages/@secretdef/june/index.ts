import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  JUNE_API_KEY: {
    description: 'June analytics API key',
    dashboard: 'https://analytics.june.so/settings',
  },
});
