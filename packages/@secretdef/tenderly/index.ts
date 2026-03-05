import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TENDERLY_ACCESS_KEY: {
    description: 'Tenderly access key',
    dashboard: 'https://dashboard.tenderly.co',
  },
  TENDERLY_ACCOUNT_SLUG: {
    description: 'Tenderly account slug',
    dashboard: 'https://dashboard.tenderly.co',
    required: false,
  },
  TENDERLY_PROJECT_SLUG: {
    description: 'Tenderly project slug',
    dashboard: 'https://dashboard.tenderly.co',
    required: false,
  },
});
