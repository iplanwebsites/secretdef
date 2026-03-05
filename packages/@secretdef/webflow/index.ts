import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WEBFLOW_API_TOKEN: {
    description: 'Webflow API token',
    dashboard: 'https://webflow.com/dashboard',
  },
  WEBFLOW_SITE_ID: {
    description: 'Webflow site ID',
    dashboard: 'https://webflow.com/dashboard',
    required: false,
  },
});
