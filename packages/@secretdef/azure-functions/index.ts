import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AZURE_FUNCTIONS_KEY: {
    description: 'Azure Functions host key',
    dashboard: 'https://portal.azure.com',
  },
});
