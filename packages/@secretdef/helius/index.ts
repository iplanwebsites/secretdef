import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HELIUS_API_KEY: {
    description: 'Helius API key for Solana',
    dashboard: 'https://dashboard.helius.dev',
  },
});
