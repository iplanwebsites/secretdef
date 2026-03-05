import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PAGERDUTY_API_TOKEN: {
    description: 'PagerDuty REST API token',
    dashboard: 'https://support.pagerduty.com/docs/api-access-keys',
  },
  PAGERDUTY_ROUTING_KEY: {
    description: 'PagerDuty Events API routing key',
    dashboard: 'https://support.pagerduty.com/docs/services-and-integrations',
    required: false,
  },
});
