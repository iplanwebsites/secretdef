import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CONFLUENT_BOOTSTRAP_SERVERS: {
    description: 'Confluent Kafka bootstrap servers',
    dashboard: 'https://confluent.cloud',
  },
  CONFLUENT_API_KEY: {
    description: 'Confluent Cloud API key',
    dashboard: 'https://confluent.cloud/settings/api-keys',
  },
  CONFLUENT_API_SECRET: {
    description: 'Confluent Cloud API secret',
    dashboard: 'https://confluent.cloud/settings/api-keys',
  },
});
