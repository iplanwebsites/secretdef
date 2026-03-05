import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FRESHSERVICE_API_KEY: {
    description: 'Freshservice API key',
    dashboard: 'https://support.freshservice.com',
  },
  FRESHSERVICE_DOMAIN: {
    description: 'Freshservice domain',
    dashboard: 'https://support.freshservice.com',
  },
});
