import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BUGSPLAT_CLIENT_ID: {
    description: 'BugSplat OAuth client ID',
    dashboard: 'https://app.bugsplat.com',
  },
  BUGSPLAT_CLIENT_SECRET: {
    description: 'BugSplat OAuth client secret',
    dashboard: 'https://app.bugsplat.com',
  },
});
