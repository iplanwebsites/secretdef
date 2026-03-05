import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  UPSTASH_REDIS_REST_URL: {
    description: 'Upstash Redis REST API URL',
    dashboard: 'https://console.upstash.com/',
  },
  UPSTASH_REDIS_REST_TOKEN: {
    description: 'Upstash Redis REST API token',
    dashboard: 'https://console.upstash.com/',
  },
});
