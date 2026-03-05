import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ACTIVEPIECES_API_KEY: {
    description: 'Activepieces API key',
    dashboard: 'https://cloud.activepieces.com',
  },
});
