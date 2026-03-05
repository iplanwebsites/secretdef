import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LOGZIO_TOKEN: {
    description: 'Logz.io shipping token',
    dashboard: 'https://app.logz.io/#/dashboard/settings/api-tokens',
  },
  LOGZIO_REGION: {
    description: 'Logz.io region',
    dashboard: 'https://app.logz.io',
    required: false,
  },
});
