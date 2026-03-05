import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZENROWS_API_KEY: {
    description: 'ZenRows API key',
    dashboard: 'https://app.zenrows.com',
  },
});
