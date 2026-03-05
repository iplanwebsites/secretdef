import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MOOSEND_API_KEY: {
    description: 'Moosend API key',
    dashboard: 'https://moosend.com',
  },
});
