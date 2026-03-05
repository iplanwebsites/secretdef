import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TRANSIFEX_API_TOKEN: {
    description: 'Transifex API token',
    dashboard: 'https://app.transifex.com/user/settings/api/',
  },
});
