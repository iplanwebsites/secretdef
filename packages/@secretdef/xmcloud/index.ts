import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SITECORE_API_KEY: {
    description: 'Sitecore XM Cloud API key',
    dashboard: 'https://portal.sitecorecloud.io',
  },
  SITECORE_EDGE_URL: {
    description: 'Sitecore Edge endpoint URL',
    dashboard: 'https://portal.sitecorecloud.io',
    validate: 'url',
    required: false,
  },
});
