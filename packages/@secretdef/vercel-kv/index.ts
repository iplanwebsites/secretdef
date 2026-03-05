import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KV_REST_API_URL: {
    description: 'Vercel KV REST API URL',
    dashboard: 'https://vercel.com/dashboard/stores',
    validate: 'url',
  },
  KV_REST_API_TOKEN: {
    description: 'Vercel KV REST API token',
    dashboard: 'https://vercel.com/dashboard/stores',
  },
});
