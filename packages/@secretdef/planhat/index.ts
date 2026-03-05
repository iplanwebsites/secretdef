import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PLANHAT_API_TOKEN: {
    description: 'Planhat API token',
    dashboard: 'https://app.planhat.com',
  },
  PLANHAT_TENANT_UUID: {
    description: 'Planhat tenant UUID',
    dashboard: 'https://app.planhat.com',
  },
});
