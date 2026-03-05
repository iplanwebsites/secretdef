import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RESEND_API_KEY: {
    description: 'Resend API key',
    dashboard: 'https://resend.com/api-keys',
  },
  RESEND_BASE_URL: {
    description: 'Override Resend API base URL',
    dashboard: 'https://resend.com/docs',
    required: false,
  },
});
