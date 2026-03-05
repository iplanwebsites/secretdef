import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BOTPRESS_TOKEN: {
    description: 'Botpress personal access token',
    dashboard: 'https://app.botpress.cloud',
  },
});
