import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FLAGSMITH_ENVIRONMENT_KEY: {
    description:
      'Flagsmith environment API key for authenticating with the feature flag API',
    dashboard: 'https://app.flagsmith.com/environment/',
  },
  FLAGSMITH_API_URL: {
    description:
      'Flagsmith API URL for self-hosted instances. Defaults to https://api.flagsmith.com',
    dashboard: 'https://app.flagsmith.com/environment/settings/',
    required: false,
  },
});
