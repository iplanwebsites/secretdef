import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SPLIT_IO_API_KEY: {
    description: 'Split.io API key',
    dashboard: 'https://app.split.io/organization/apikeys',
  },
});
