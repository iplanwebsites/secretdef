import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AUDD_API_TOKEN: {
    description: 'AudD music recognition API token',
    dashboard: 'https://audd.io',
  },
});
