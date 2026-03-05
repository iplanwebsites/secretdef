import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HOPIN_API_KEY: {
    description: 'Hopin API key',
    dashboard: 'https://app.hopin.com',
  },
});
