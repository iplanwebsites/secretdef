import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LOCIZE_API_KEY: {
    description: 'Locize API key',
    dashboard: 'https://locize.app/settings/users',
  },
  LOCIZE_PROJECT_ID: {
    description: 'Locize project ID',
    dashboard: 'https://locize.app',
  },
});
