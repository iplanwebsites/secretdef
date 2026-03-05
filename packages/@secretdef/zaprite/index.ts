import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZAPRITE_API_KEY: {
    description: 'Zaprite API key',
    dashboard: 'https://zaprite.com',
  },
});
