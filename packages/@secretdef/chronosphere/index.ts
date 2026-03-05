import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CHRONOSPHERE_API_TOKEN: {
    description: 'Chronosphere API token',
    dashboard: 'https://chronosphere.io',
  },
  CHRONOSPHERE_ORG_NAME: {
    description: 'Chronosphere organization',
    dashboard: 'https://chronosphere.io',
    required: false,
  },
});
