import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VALIMAIL_API_KEY: {
    description: 'Valimail API key',
    dashboard: 'https://app.valimail.com',
  },
});
