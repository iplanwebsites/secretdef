import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FASTGEN_API_KEY: {
    description: 'Fastgen API key',
    dashboard: 'https://fastgen.com',
  },
});
