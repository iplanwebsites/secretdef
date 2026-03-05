import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FIVETRAN_API_KEY: {
    description: 'Fivetran API key',
    dashboard: 'https://fivetran.com/account/settings',
  },
  FIVETRAN_API_SECRET: {
    description: 'Fivetran API secret',
    dashboard: 'https://fivetran.com/account/settings',
  },
});
