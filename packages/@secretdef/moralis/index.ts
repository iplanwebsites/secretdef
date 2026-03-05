import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MORALIS_API_KEY: {
    description: 'Moralis API key',
    dashboard: 'https://admin.moralis.io/settings/account',
  },
});
