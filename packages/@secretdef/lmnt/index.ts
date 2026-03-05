import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LMNT_API_KEY: {
    description: 'LMNT speech API key',
    dashboard: 'https://app.lmnt.com/account',
  },
});
