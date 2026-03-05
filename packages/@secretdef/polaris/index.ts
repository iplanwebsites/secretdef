import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  POLARIS_API_KEY: {
    description: 'Polaris API key',
    dashboard: 'https://polaris.synopsys.com',
  },
  POLARIS_SERVER_URL: {
    description: 'Polaris server URL',
    dashboard: 'https://polaris.synopsys.com',
    validate: 'url',
  },
});
