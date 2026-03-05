import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WISE_API_TOKEN: {
    description: 'Wise API token',
    dashboard: 'https://wise.com/settings/api-tokens',
  },
  WISE_PROFILE_ID: {
    description: 'Wise profile ID',
    dashboard: 'https://wise.com',
    required: false,
  },
});
