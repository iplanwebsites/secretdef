import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DEPOT_TOKEN: {
    description: 'Depot build token',
    dashboard: 'https://depot.dev',
  },
});
