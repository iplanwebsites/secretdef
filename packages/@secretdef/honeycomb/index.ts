import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HONEYCOMB_API_KEY: { description: 'Honeycomb API key',
    dashboard: 'https://ui.honeycomb.io/account' },
  HONEYCOMB_DATASET: { description: 'Honeycomb dataset name',
    dashboard: 'https://ui.honeycomb.io/', required: false },
});
