import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  POWERBI_CLIENT_ID: {
    description: 'Power BI client ID',
    dashboard: 'https://app.powerbi.com',
  },
  POWERBI_CLIENT_SECRET: {
    description: 'Power BI client secret',
    dashboard: 'https://app.powerbi.com',
  },
  POWERBI_TENANT_ID: {
    description: 'Power BI tenant ID',
    dashboard: 'https://app.powerbi.com',
  },
});
