import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MAILJET_API_KEY: {
    description: 'Mailjet API key',
    dashboard: 'https://app.mailjet.com/account/api_keys',
  },
  MAILJET_API_SECRET: {
    description: 'Mailjet API secret',
    dashboard: 'https://app.mailjet.com/account/api_keys',
  },
});
