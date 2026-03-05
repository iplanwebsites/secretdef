import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TRACELOOP_API_KEY: {
    description: 'Traceloop API key',
    dashboard: 'https://app.traceloop.com',
  },
});
