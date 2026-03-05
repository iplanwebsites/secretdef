import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FRESHDESK_API_KEY: {
    description: 'Freshdesk API key',
    dashboard: 'https://support.freshdesk.com/en/support/solutions/articles/215517',
  },
  FRESHDESK_DOMAIN: {
    description: 'Freshdesk subdomain',
    dashboard: 'https://support.freshdesk.com/en/support/solutions/articles/215517',
  },
});
