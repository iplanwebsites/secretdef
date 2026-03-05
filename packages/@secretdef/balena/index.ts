import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BALENA_API_KEY: {
    description: 'Balena API key',
    dashboard: 'https://dashboard.balena-cloud.com',
  },
});
