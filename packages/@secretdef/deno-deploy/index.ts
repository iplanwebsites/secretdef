import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DENO_DEPLOY_TOKEN: {
    description: 'Deno Deploy access token',
    dashboard: 'https://dash.deno.com/account#access-tokens',
  },
});
