import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  REPAIRSHOPR_API_KEY: {
    description: 'RepairShopr API key',
    dashboard: 'https://www.repairshopr.com',
  },
  REPAIRSHOPR_SUBDOMAIN: {
    description: 'RepairShopr subdomain',
    dashboard: 'https://www.repairshopr.com',
  },
});
