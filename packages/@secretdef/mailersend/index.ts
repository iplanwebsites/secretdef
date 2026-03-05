import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MAILERSEND_API_TOKEN: {
    description: 'MailerSend API token',
    dashboard: 'https://app.mailersend.com/api-tokens',
  },
});
