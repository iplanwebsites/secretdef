import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DEBEZIUM_CONNECT_URL: {
    description: 'Debezium Connect REST API URL',
    dashboard: 'https://debezium.io',
    validate: 'url',
  },
});
