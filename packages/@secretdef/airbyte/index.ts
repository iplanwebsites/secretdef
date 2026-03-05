import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AIRBYTE_API_KEY: {
    description: 'Airbyte API key',
    dashboard: 'https://cloud.airbyte.com',
  },
});
