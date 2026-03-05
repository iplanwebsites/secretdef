import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COMET_API_KEY: {
    description: 'Comet ML API key',
    dashboard: 'https://www.comet.com/account-settings/apiKeys',
  },
  COMET_WORKSPACE: {
    description: 'Comet workspace name',
    dashboard: 'https://www.comet.com',
    required: false,
  },
  COMET_PROJECT_NAME: {
    description: 'Comet project name',
    dashboard: 'https://www.comet.com',
    required: false,
  },
});
