import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ASSEMBLA_API_KEY: {
    description: 'Assembla API key',
    dashboard: 'https://app.assembla.com/user/edit/manage_clients',
  },
  ASSEMBLA_API_SECRET: {
    description: 'Assembla API secret',
    dashboard: 'https://app.assembla.com/user/edit/manage_clients',
  },
});
