import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CALABASH_API_KEY: {
    description: 'Calabash API key',
    dashboard: 'https://calabash.co',
  },
});
