import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PAYREX_SECRET_KEY: {
    description: 'PayRex secret key',
    dashboard: 'https://payrex.io',
  },
});
