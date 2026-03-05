import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HUBSPOT_ACCESS_TOKEN: {
    description: 'HubSpot private app access token for API authentication',
    dashboard: 'https://app.hubspot.com/l/api-key',
    required: false,
  },
  HUBSPOT_API_KEY: {
    description: 'HubSpot developer API key for legacy API support',
    dashboard: 'https://app.hubspot.com/',
    required: false,
  },
  HUBSPOT_DEVELOPER_API_KEY: {
    description: 'HubSpot developer API key for developer-authenticated endpoints',
    dashboard: 'https://app.hubspot.com/',
    required: false,
  },
});
