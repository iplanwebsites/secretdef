import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MERGE_API_KEY: {
    description: 'Merge API key',
    dashboard: 'https://app.merge.dev/keys',
  },
});
