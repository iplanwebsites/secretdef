import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  USERFLOW_TOKEN: {
    description: 'Userflow API token',
    dashboard: 'https://userflow.com',
  },
});
