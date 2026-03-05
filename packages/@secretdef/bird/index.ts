import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BIRD_ACCESS_KEY: {
    description: 'Bird API access key',
    dashboard: 'https://dashboard.bird.com',
  },
});
