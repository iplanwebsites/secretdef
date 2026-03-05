import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WHATNOT_API_KEY: {
    description: 'Whatnot API key',
    dashboard: 'https://www.whatnot.com',
  },
});
