import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PENNYLANE_API_KEY: {
    description: 'Pennylane API key',
    dashboard: 'https://www.pennylane.com',
  },
});
