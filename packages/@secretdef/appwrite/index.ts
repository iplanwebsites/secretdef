import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  APPWRITE_ENDPOINT: {
    description: 'Appwrite API endpoint',
    dashboard: 'https://appwrite.io/console',
  },
  APPWRITE_PROJECT_ID: {
    description: 'Appwrite project ID',
    dashboard: 'https://appwrite.io/console',
  },
  APPWRITE_API_KEY: {
    description: 'Appwrite API key',
    dashboard: 'https://appwrite.io/console/apikeys',
  },
});
