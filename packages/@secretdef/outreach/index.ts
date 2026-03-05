import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OUTREACH_CLIENT_ID: {
    description: 'Outreach OAuth client ID',
    dashboard: 'https://api.outreach.io',
  },
  OUTREACH_CLIENT_SECRET: {
    description: 'Outreach OAuth client secret',
    dashboard: 'https://api.outreach.io',
  },
});
