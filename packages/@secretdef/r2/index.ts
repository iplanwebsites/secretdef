import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  R2_ACCOUNT_ID: {
    description: 'Cloudflare account ID for R2',
    dashboard: 'https://dash.cloudflare.com',
  },
  R2_ACCESS_KEY_ID: {
    description: 'R2 access key ID',
    dashboard: 'https://dash.cloudflare.com',
  },
  R2_SECRET_ACCESS_KEY: {
    description: 'R2 secret access key',
    dashboard: 'https://dash.cloudflare.com',
  },
});
