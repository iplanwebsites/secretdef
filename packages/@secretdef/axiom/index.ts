import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AXIOM_TOKEN: {
    description: 'Axiom API token for authentication',
    dashboard: 'https://app.axiom.co/settings/tokens',
    required: true,
  },
  AXIOM_DATASET: {
    description: 'Axiom dataset name for storing logs and events',
    dashboard: 'https://app.axiom.co/settings/datasets',
    required: false,
  },
  AXIOM_ORG_ID: {
    description: 'Axiom organization ID for multi-org support',
    dashboard: 'https://app.axiom.co/settings/tokens',
    required: false,
  },
  AXIOM_URL: {
    description: 'Axiom API endpoint URL (optional, defaults to production)',
    dashboard: 'https://app.axiom.co/settings/tokens',
    required: false,
  },
  AXIOM_DATASET_SUFFIX: {
    description: 'Suffix to append to dataset names for environment-based namespacing',
    dashboard: 'https://app.axiom.co/settings/datasets',
    required: false,
  },
});
