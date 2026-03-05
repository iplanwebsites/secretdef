import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  UPSTASH_KAFKA_REST_URL: {
    description: 'Upstash Kafka REST URL',
    dashboard: 'https://console.upstash.com',
    validate: 'url',
  },
  UPSTASH_KAFKA_REST_USERNAME: {
    description: 'Upstash Kafka REST username',
    dashboard: 'https://console.upstash.com',
  },
  UPSTASH_KAFKA_REST_PASSWORD: {
    description: 'Upstash Kafka REST password',
    dashboard: 'https://console.upstash.com',
  },
});
