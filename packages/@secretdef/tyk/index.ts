import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TYK_GW_SECRET: {
    description: 'Tyk gateway secret',
    dashboard: 'https://tyk.io',
  },
});
