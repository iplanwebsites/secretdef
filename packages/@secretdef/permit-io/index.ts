import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PERMIT_API_KEY: {
    description: 'Permit.io API key',
    dashboard: 'https://app.permit.io/settings/api-keys',
  },
});
