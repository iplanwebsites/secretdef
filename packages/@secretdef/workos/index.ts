import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WORKOS_API_KEY: {
    description: 'WorkOS API key',
    dashboard: 'https://dashboard.workos.com/api-keys',
  },
  WORKOS_CLIENT_ID: {
    description: 'WorkOS client ID',
    dashboard: 'https://dashboard.workos.com/api-keys',
  },
});
