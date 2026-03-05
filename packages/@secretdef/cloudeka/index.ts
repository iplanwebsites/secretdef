import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLOUDEKA_API_KEY: {
    description: 'Cloudeka API key',
    dashboard: 'https://www.cloudeka.id',
  },
});
