import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PELIQAN_API_KEY: {
    description: 'Peliqan API key',
    dashboard: 'https://peliqan.io',
  },
});
