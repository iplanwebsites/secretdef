import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  INFURA_API_KEY: {
    description: 'Infura API key',
    dashboard: 'https://infura.io/dashboard',
  },
  INFURA_API_SECRET: {
    description: 'Infura API secret',
    dashboard: 'https://infura.io/dashboard',
    required: false,
  },
});
