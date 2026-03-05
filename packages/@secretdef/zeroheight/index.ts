import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZEROHEIGHT_TOKEN: {
    description: 'Zeroheight API token',
    dashboard: 'https://zeroheight.com',
  },
});
