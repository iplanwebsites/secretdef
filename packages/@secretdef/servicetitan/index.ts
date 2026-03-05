import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SERVICETITAN_CLIENT_ID: {
    description: 'ServiceTitan client ID',
    dashboard: 'https://developer.servicetitan.io',
  },
  SERVICETITAN_CLIENT_SECRET: {
    description: 'ServiceTitan client secret',
    dashboard: 'https://developer.servicetitan.io',
  },
  SERVICETITAN_TENANT_ID: {
    description: 'ServiceTitan tenant ID',
    dashboard: 'https://developer.servicetitan.io',
  },
});
