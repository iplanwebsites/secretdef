import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RESEND_API_KEY: {
    description: 'Resend API key — https://resend.com/api-keys',
  },
  RESEND_BASE_URL: {
    description: 'Override Resend API base URL — https://resend.com/docs',
    required: false,
  },
});
