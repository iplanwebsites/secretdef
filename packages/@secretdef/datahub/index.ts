import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DATAHUB_GMS_TOKEN: {
    description: 'DataHub GMS auth token',
    dashboard: 'https://datahubproject.io',
  },
  DATAHUB_GMS_URL: {
    description: 'DataHub GMS server URL',
    dashboard: 'https://datahubproject.io',
    validate: 'url',
    required: false,
  },
});
