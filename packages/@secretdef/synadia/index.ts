import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NATS_URL: {
    description: 'NATS server URL',
    dashboard: 'https://synadia.com',
    validate: 'url',
  },
  NATS_CREDS: {
    description: 'NATS credentials file content',
    dashboard: 'https://synadia.com',
    required: false,
  },
});
