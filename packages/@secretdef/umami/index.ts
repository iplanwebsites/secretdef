import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  UMAMI_WEBSITE_ID: {
    description: 'Umami website ID',
    dashboard: 'https://app.umami.is/settings',
  },
  UMAMI_API_KEY: {
    description: 'Umami API key',
    dashboard: 'https://app.umami.is/settings',
    required: false,
  },
});
