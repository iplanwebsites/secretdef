import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HARBOR_URL: {
    description: 'Harbor registry URL',
    dashboard: 'https://goharbor.io',
    validate: 'url',
  },
  HARBOR_USERNAME: {
    description: 'Harbor username',
    dashboard: 'https://goharbor.io',
  },
  HARBOR_PASSWORD: {
    description: 'Harbor password',
    dashboard: 'https://goharbor.io',
  },
});
