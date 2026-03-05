import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NYLAS_API_KEY: {
    description: 'Nylas API key',
    dashboard: 'https://dashboard.nylas.com',
  },
  NYLAS_GRANT_ID: {
    description: 'Nylas grant ID',
    dashboard: 'https://dashboard.nylas.com',
    required: false,
  },
});
