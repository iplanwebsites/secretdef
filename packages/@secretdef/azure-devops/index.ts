import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AZURE_DEVOPS_ORG_URL: {
    description: 'Azure DevOps organization URL',
    dashboard: 'https://dev.azure.com',
    validate: 'url',
  },
  AZURE_DEVOPS_TOKEN: {
    description: 'Azure DevOps personal access token',
    dashboard: 'https://dev.azure.com',
  },
});
