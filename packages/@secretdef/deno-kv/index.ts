import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DENO_KV_ACCESS_TOKEN: {
    description: 'Deno KV access token for remote connections',
    dashboard: 'https://dash.deno.com/account',
  },
  DENO_KV_URL: {
    description: 'Deno KV database URL',
    dashboard: 'https://dash.deno.com/',
    required: false,
  },
});
