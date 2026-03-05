import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LOB_API_KEY: {
    description: 'Lob API key',
    dashboard: 'https://dashboard.lob.com/settings/api-keys',
  },
});
