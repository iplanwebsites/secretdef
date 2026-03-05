import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COREWEAVE_API_TOKEN: {
    description: 'CoreWeave API token',
    dashboard: 'https://cloud.coreweave.com',
  },
});
