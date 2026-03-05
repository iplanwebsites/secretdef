import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TOPLYNE_API_KEY: {
    description: 'Toplyne API key',
    dashboard: 'https://app.toplyne.io',
  },
});
