import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PLAUSIBLE_SITE_ID: {
    description: 'Plausible site ID',
    dashboard: 'https://plausible.io/settings',
  },
  PLAUSIBLE_API_KEY: {
    description: 'Plausible API key',
    dashboard: 'https://plausible.io/settings/api-keys',
    required: false,
  },
});
