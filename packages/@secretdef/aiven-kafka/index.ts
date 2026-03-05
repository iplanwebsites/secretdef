import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AIVEN_KAFKA_URI: {
    description: 'Aiven Kafka connection URI',
    dashboard: 'https://console.aiven.io',
    validate: 'url',
  },
});
