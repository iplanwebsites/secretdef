import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AZURE_SERVICE_BUS_CONNECTION_STRING: {
    description: 'Azure Service Bus connection string',
    dashboard: 'https://portal.azure.com',
  },
});
