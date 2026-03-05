import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RANCHER_ACCESS_KEY: {
    description: 'Rancher API access key',
    dashboard: 'https://rancher.com',
  },
  RANCHER_SECRET_KEY: {
    description: 'Rancher API secret key',
    dashboard: 'https://rancher.com',
  },
  RANCHER_SERVER_URL: {
    description: 'Rancher server URL',
    dashboard: 'https://rancher.com',
    validate: 'url',
  },
});
