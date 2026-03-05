import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  POSTMARK_SERVER_TOKEN: {
    description: 'Postmark server API token',
    dashboard: 'https://account.postmarkapp.com/api_tokens',
  },
  POSTMARK_ACCOUNT_TOKEN: {
    description: 'Postmark account API token',
    dashboard: 'https://account.postmarkapp.com/api_tokens',
    required: false,
  },
});
