import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GAINSIGHT_API_KEY: {
    description: 'Gainsight API key',
    dashboard: 'https://gainsight.com',
  },
});
