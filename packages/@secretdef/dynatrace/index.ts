import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DYNATRACE_API_TOKEN: {
    description: 'Dynatrace API token',
    dashboard: 'https://www.dynatrace.com/support/help/dynatrace-api/basics/dynatrace-api-authentication',
  },
  DYNATRACE_ENVIRONMENT_URL: {
    description: 'Dynatrace environment URL',
    dashboard: 'https://www.dynatrace.com/support/help/get-started/access-tokens',
    validate: 'url',
  },
});
