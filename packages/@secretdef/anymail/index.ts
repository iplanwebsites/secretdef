import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ANYMAIL_API_KEY: {
    description: 'Anymail API key',
    dashboard: 'https://anymail.dev',
  },
});
