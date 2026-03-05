import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GRAIN_API_TOKEN: {
    description: 'Grain API token',
    dashboard: 'https://grain.com',
  },
});
