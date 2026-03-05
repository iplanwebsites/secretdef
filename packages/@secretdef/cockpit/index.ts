import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COCKPIT_API_TOKEN: {
    description: 'Cockpit CMS API token',
    dashboard: 'https://getcockpit.com',
  },
  COCKPIT_URL: {
    description: 'Cockpit CMS instance URL',
    dashboard: 'https://getcockpit.com',
    validate: 'url',
  },
});
