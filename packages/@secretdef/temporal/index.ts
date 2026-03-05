import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TEMPORAL_ADDRESS: { description: 'Temporal server address',
    dashboard: 'https://cloud.temporal.io/' },
  TEMPORAL_NAMESPACE: { description: 'Temporal namespace',
    dashboard: 'https://cloud.temporal.io/', required: false },
  TEMPORAL_API_KEY: { description: 'Temporal Cloud API key',
    dashboard: 'https://cloud.temporal.io/', required: false },
});
