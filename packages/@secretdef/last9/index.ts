import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LAST9_API_KEY: {
    description: 'Last9 API key',
    dashboard: 'https://app.last9.io',
  },
  LAST9_CLUSTER_URL: {
    description: 'Last9 cluster URL',
    dashboard: 'https://app.last9.io',
    validate: 'url',
  },
});
