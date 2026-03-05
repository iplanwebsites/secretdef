import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PLATYPUS_API_KEY: {
    description: 'Platypus API key',
    dashboard: 'https://www.platypus.co',
  },
});
