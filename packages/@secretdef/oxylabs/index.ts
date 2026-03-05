import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OXYLABS_USERNAME: {
    description: 'Oxylabs username',
    dashboard: 'https://dashboard.oxylabs.io',
  },
  OXYLABS_PASSWORD: {
    description: 'Oxylabs password',
    dashboard: 'https://dashboard.oxylabs.io',
  },
});
