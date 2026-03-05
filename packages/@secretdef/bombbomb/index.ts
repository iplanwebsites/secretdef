import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BOMBBOMB_API_KEY: {
    description: 'BombBomb API key',
    dashboard: 'https://bombbomb.com',
  },
});
