import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STATUSPAGE_API_KEY: {
    description: 'Statuspage API key',
    dashboard: 'https://manage.statuspage.io/organizations',
  },
  STATUSPAGE_PAGE_ID: {
    description: 'Statuspage page ID',
    dashboard: 'https://manage.statuspage.io',
    required: false,
  },
});
