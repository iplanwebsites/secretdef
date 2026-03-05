import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SIGNOZ_ACCESS_TOKEN: {
    description: 'SigNoz access token',
    dashboard: 'https://app.signoz.io',
  },
  SIGNOZ_COLLECTOR_URL: {
    description: 'SigNoz collector URL',
    dashboard: 'https://app.signoz.io',
    validate: 'url',
    required: false,
  },
});
