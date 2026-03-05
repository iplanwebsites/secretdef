import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WORKATO_API_TOKEN: {
    description: 'Workato API token',
    dashboard: 'https://app.workato.com',
  },
});
