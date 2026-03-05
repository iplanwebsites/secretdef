import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CROWDSTRIKE_CLIENT_ID: {
    description: 'CrowdStrike client ID',
    dashboard: 'https://falcon.crowdstrike.com/support/api-clients-and-keys',
  },
  CROWDSTRIKE_CLIENT_SECRET: {
    description: 'CrowdStrike client secret',
    dashboard: 'https://falcon.crowdstrike.com/support/api-clients-and-keys',
  },
});
