import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ANVIL_API_KEY: {
    description: 'Anvil API key',
    dashboard: 'https://www.useanvil.com/app/api',
  },
});
