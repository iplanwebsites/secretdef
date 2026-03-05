import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TOWER_API_KEY: {
    description: 'Tower API key',
    dashboard: 'https://tower.nf',
  },
});
