import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CAMUNDA_CLIENT_ID: {
    description: 'Camunda Cloud client ID',
    dashboard: 'https://console.cloud.camunda.io',
  },
  CAMUNDA_CLIENT_SECRET: {
    description: 'Camunda Cloud client secret',
    dashboard: 'https://console.cloud.camunda.io',
  },
  CAMUNDA_CLUSTER_ID: {
    description: 'Camunda cluster ID',
    dashboard: 'https://console.cloud.camunda.io',
    required: false,
  },
});
