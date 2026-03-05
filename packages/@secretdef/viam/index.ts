import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VIAM_API_KEY: {
    description: 'Viam API key',
    dashboard: 'https://app.viam.com',
  },
  VIAM_API_KEY_ID: {
    description: 'Viam API key ID',
    dashboard: 'https://app.viam.com',
  },
});
