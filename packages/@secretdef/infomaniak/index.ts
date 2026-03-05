import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  INFOMANIAK_API_TOKEN: {
    description: 'Infomaniak API token',
    dashboard: 'https://manager.infomaniak.com',
  },
});
