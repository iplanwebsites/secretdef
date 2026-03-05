import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CAZENA_API_KEY: {
    description: 'Cazena API key',
    dashboard: 'https://www.cazena.com',
  },
});
