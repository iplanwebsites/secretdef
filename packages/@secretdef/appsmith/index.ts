import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  APPSMITH_API_KEY: {
    description: 'Appsmith API key',
    dashboard: 'https://app.appsmith.com',
  },
});
