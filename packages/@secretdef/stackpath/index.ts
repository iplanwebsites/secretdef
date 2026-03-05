import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STACKPATH_CLIENT_ID: {
    description: 'StackPath OAuth client ID',
    dashboard: 'https://control.stackpath.com',
  },
  STACKPATH_CLIENT_SECRET: {
    description: 'StackPath OAuth client secret',
    dashboard: 'https://control.stackpath.com',
  },
});
