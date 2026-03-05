import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FINCH_CLIENT_ID: {
    description: 'Finch client ID',
    dashboard: 'https://developer.tryfinch.com',
  },
  FINCH_CLIENT_SECRET: {
    description: 'Finch client secret',
    dashboard: 'https://developer.tryfinch.com',
  },
  FINCH_WEBHOOK_SECRET: {
    description: 'Finch webhook secret',
    dashboard: 'https://developer.tryfinch.com',
    required: false,
  },
});
