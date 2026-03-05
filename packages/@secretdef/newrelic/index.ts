import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NEW_RELIC_LICENSE_KEY: {
    description: 'New Relic license key',
    dashboard: 'https://one.newrelic.com/admin-portal/api-keys/insightkeys',
  },
  NEW_RELIC_APP_NAME: {
    description: 'New Relic application name',
    dashboard: 'https://one.newrelic.com/',
    required: false,
  },
  NEW_RELIC_API_KEY: {
    description: 'New Relic user API key',
    dashboard: 'https://one.newrelic.com/admin-portal/api-keys/home',
    required: false,
  },
});
