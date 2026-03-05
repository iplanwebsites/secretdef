import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LUSHA_API_KEY: {
    description: 'Lusha API key',
    dashboard: 'https://www.lusha.com/docs/',
  },
});
