import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HARVEST_ACCOUNT_ID: {
    description: 'Harvest account ID',
    dashboard: 'https://id.getharvest.com/developers',
  },
  HARVEST_ACCESS_TOKEN: {
    description: 'Harvest personal access token',
    dashboard: 'https://id.getharvest.com/developers',
  },
});
