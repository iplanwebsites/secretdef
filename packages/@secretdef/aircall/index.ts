import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AIRCALL_API_ID: {
    description: 'Aircall API ID',
    dashboard: 'https://dashboard.aircall.io/integrations/api-keys',
  },
  AIRCALL_API_TOKEN: {
    description: 'Aircall API token',
    dashboard: 'https://dashboard.aircall.io/integrations/api-keys',
  },
});
