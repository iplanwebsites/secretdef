import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  REPLICACHE_LICENSE_KEY: {
    description: 'Replicache license key',
    dashboard: 'https://replicache.dev',
  },
});
