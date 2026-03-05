import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ONEDRIVE_CLIENT_ID: {
    description: 'OneDrive OAuth client ID',
    dashboard: 'https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps',
  },
  ONEDRIVE_CLIENT_SECRET: {
    description: 'OneDrive OAuth client secret',
    dashboard: 'https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps',
  },
});
