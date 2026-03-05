import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MSGRAPH_CLIENT_ID: {
    description: 'Microsoft Graph client ID',
    dashboard: 'https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps',
  },
  MSGRAPH_CLIENT_SECRET: {
    description: 'Microsoft Graph client secret',
    dashboard: 'https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps',
  },
  MSGRAPH_TENANT_ID: {
    description: 'Microsoft Graph tenant ID',
    dashboard: 'https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps',
  },
});
