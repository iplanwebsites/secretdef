import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SENDGRID_API_KEY: {
    envVar: 'SENDGRID_API_KEY',
    description: 'SendGrid API key — https://app.sendgrid.com/settings/api_keys',
  },
});
