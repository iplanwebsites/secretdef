import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BREADCRUMBS_API_KEY: {
    description: 'Breadcrumbs lead scoring API key',
    dashboard: 'https://app.breadcrumbs.io',
  },
});
