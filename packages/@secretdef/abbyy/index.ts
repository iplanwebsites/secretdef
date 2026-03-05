import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ABBYY_APP_ID: {
    description: 'ABBYY application ID',
    dashboard: 'https://www.abbyy.com',
  },
  ABBYY_APP_PASSWORD: {
    description: 'ABBYY application password',
    dashboard: 'https://www.abbyy.com',
  },
});
