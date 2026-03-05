import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  D_ID_API_KEY: {
    description: 'D-ID API key',
    dashboard: 'https://studio.d-id.com/account-settings',
  },
});
