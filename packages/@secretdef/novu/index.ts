import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NOVU_API_KEY: {
    description: 'Novu API key for server-side authentication',
    dashboard: 'https://dashboard.novu.co/api-keys',
  },
  NOVU_SECRET_KEY: {
    description: 'Novu secret key for webhook verification and secure operations',
    dashboard: 'https://dashboard.novu.co/api-keys',
  },
  NOVU_API_URL: {
    description: 'Custom Novu API URL (defaults to https://api.novu.co)',
    dashboard: 'https://docs.novu.co',
    required: false,
  },
  NOVU_APP_ID: {
    description: 'Novu application identifier for client-side widget initialization',
    dashboard: 'https://dashboard.novu.co/settings',
    required: false,
  },
  NOVU_BRIDGE_ORIGIN: {
    description: 'Origin URL for Novu bridge in self-hosted setups',
    dashboard: 'https://docs.novu.co/self-hosted/self-hosted-overview',
    required: false,
  },
  NOVU_STRICT_AUTHENTICATION_ENABLED: {
    description: 'Enable strict authentication mode (true/false)',
    dashboard: 'https://docs.novu.co/api/overview',
    required: false,
  },
});
