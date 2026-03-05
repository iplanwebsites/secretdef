import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BITNAMI_API_KEY: {
    description: 'Bitnami API key',
    dashboard: 'https://bitnami.com',
  },
});
