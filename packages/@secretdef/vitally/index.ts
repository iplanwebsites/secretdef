import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VITALLY_API_KEY: {
    description: 'Vitally API key',
    dashboard: 'https://app.vitally.io/settings/api-keys',
  },
});
