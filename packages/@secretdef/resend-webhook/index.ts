import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RESEND_WEBHOOK_SECRET: {
    description: 'Resend webhook signing secret',
    dashboard: 'https://resend.com/webhooks',
  },
});
