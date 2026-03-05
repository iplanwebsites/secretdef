import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SCALEWAY_ACCESS_KEY: {
    description: 'Scaleway access key',
    dashboard: 'https://console.scaleway.com/iam/credentials',
  },
  SCALEWAY_SECRET_KEY: {
    description: 'Scaleway secret key',
    dashboard: 'https://console.scaleway.com/iam/credentials',
  },
  SCALEWAY_PROJECT_ID: {
    description: 'Scaleway project ID',
    dashboard: 'https://console.scaleway.com',
    required: false,
  },
});
