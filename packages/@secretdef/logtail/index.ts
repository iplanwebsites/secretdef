import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LOGTAIL_SOURCE_TOKEN: {
    description: 'Logtail source token for authentication',
    dashboard: 'https://betterstack.com/docs/logs/logtail-http-api/',
  },
  LOGTAIL_ENDPOINT: {
    description: 'Logtail API endpoint URL (optional, defaults to production)',
    dashboard: 'https://betterstack.com/docs/logs/logtail-http-api/',
    required: false,
  },
});
