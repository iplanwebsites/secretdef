import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  REDPANDA_BROKERS: {
    description: 'Redpanda broker addresses',
    dashboard: 'https://cloud.redpanda.com',
  },
  REDPANDA_USERNAME: {
    description: 'Redpanda SASL username',
    dashboard: 'https://cloud.redpanda.com',
    required: false,
  },
  REDPANDA_PASSWORD: {
    description: 'Redpanda SASL password',
    dashboard: 'https://cloud.redpanda.com',
    required: false,
  },
});
