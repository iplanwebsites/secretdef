import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BLOOMERANG_API_KEY: {
    description: 'Bloomerang API key',
    dashboard: 'https://bloomerang.co',
  },
});
