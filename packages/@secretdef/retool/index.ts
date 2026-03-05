import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RETOOL_API_KEY: {
    description: 'Retool API key',
    dashboard: 'https://retool.com',
  },
});
