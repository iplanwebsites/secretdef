import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TAWKTO_API_KEY: {
    description: 'tawk.to REST API key',
    dashboard: 'https://dashboard.tawk.to/settings/api',
  },
});
