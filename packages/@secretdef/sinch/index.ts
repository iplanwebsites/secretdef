import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SINCH_SERVICE_PLAN_ID: {
    description: 'Sinch service plan ID',
    dashboard: 'https://dashboard.sinch.com/settings/access-keys',
  },
  SINCH_API_TOKEN: {
    description: 'Sinch API token',
    dashboard: 'https://dashboard.sinch.com/settings/access-keys',
  },
});
