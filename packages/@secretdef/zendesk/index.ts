import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZENDESK_SUBDOMAIN: {
    description: 'Zendesk subdomain',
    dashboard: 'https://support.zendesk.com/hc/en-us/articles/4408889192858',
  },
  ZENDESK_EMAIL: {
    description: 'Zendesk agent email',
    dashboard: 'https://support.zendesk.com/hc/en-us/articles/4408889192858',
  },
  ZENDESK_API_TOKEN: {
    description: 'Zendesk API token',
    dashboard: 'https://support.zendesk.com/hc/en-us/articles/4408889192858',
  },
});
