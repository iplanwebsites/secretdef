import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CROWDIN_PERSONAL_TOKEN: {
    description: 'Crowdin personal access token',
    dashboard: 'https://crowdin.com/settings#api-key',
  },
  CROWDIN_PROJECT_ID: {
    description: 'Crowdin project ID',
    dashboard: 'https://crowdin.com',
    required: false,
  },
});
