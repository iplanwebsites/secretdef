import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ASANA_ACCESS_TOKEN: {
    description: 'Asana personal access token',
    dashboard: 'https://app.asana.com/0/developer-console',
  },
});
