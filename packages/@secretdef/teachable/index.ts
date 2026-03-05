import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TEACHABLE_API_KEY: {
    description: 'Teachable API key',
    dashboard: 'https://teachable.com/settings/api',
  },
});
