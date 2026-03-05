import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BASECAMP_CLIENT_ID: {
    description: 'Basecamp OAuth client ID',
    dashboard: 'https://launchpad.37signals.com/integrations',
  },
  BASECAMP_CLIENT_SECRET: {
    description: 'Basecamp OAuth client secret',
    dashboard: 'https://launchpad.37signals.com/integrations',
  },
});
