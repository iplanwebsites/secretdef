import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BLOCKEDEN_API_KEY: {
    description: 'BlockEden API key',
    dashboard: 'https://blockeden.xyz',
  },
});
