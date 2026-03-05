import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SAGE_CLIENT_ID: {
    description: 'Sage OAuth client ID',
    dashboard: 'https://developerselfservice.sageone.com',
  },
  SAGE_CLIENT_SECRET: {
    description: 'Sage OAuth client secret',
    dashboard: 'https://developerselfservice.sageone.com',
  },
});
