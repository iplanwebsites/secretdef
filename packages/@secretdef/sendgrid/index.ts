import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SENDGRID_API_KEY: {
    description: 'SendGrid API key',
    dashboard: 'https://app.sendgrid.com/settings/api_keys',
  },
});
