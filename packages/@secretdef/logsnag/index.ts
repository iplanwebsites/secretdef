import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LOGSNAG_TOKEN: {
    description: 'LogSnag API token',
    dashboard: 'https://app.logsnag.com/dashboard/settings/api',
  },
});
