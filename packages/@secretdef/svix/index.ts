import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SVIX_TOKEN: {
    description: 'Svix API authentication token',
    dashboard: 'https://dashboard.svix.com/',
  },
  SVIX_SERVER_URL: {
    description: 'Svix server URL for API requests',
    dashboard: 'https://dashboard.svix.com/',
    required: false,
  },
});
