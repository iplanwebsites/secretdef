import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DOOFINDER_MANAGEMENT_TOKEN: {
    description: 'Doofinder management API token',
    dashboard: 'https://admin.doofinder.com',
  },
});
