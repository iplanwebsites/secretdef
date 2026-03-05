import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BASETEN_API_KEY: {
    description: 'Baseten API key',
    dashboard: 'https://app.baseten.co/settings/account/api_keys',
  },
});
