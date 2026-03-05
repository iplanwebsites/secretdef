import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RIPPLING_API_KEY: {
    description: 'Rippling API key',
    dashboard: 'https://app.rippling.com/company-settings/api-access',
  },
});
