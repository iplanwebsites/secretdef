import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KNOCK_API_KEY: {
    description: 'Knock secret API key',
    dashboard: 'https://dashboard.knock.app/settings/api-keys',
  },
  KNOCK_SIGNING_KEY: {
    description: 'Knock signing key for webhooks',
    dashboard: 'https://dashboard.knock.app/settings/api-keys',
    required: false,
  },
});
