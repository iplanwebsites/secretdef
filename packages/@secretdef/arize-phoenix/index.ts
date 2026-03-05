import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PHOENIX_API_KEY: {
    description: 'Phoenix API key',
    dashboard: 'https://app.phoenix.arize.com',
  },
  PHOENIX_COLLECTOR_ENDPOINT: {
    description: 'Phoenix collector endpoint',
    dashboard: 'https://app.phoenix.arize.com',
    validate: 'url',
    required: false,
  },
});
