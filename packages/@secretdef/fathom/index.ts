import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FATHOM_SITE_ID: {
    description: 'Fathom site ID',
    dashboard: 'https://app.usefathom.com/settings',
  },
  FATHOM_API_KEY: {
    description: 'Fathom API key',
    dashboard: 'https://app.usefathom.com/settings',
    required: false,
  },
});
