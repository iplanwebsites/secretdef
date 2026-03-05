import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WS1_API_KEY: {
    description: 'Workspace ONE UEM API key',
    dashboard: 'https://www.vmware.com/products/workspace-one.html',
  },
  WS1_API_URL: {
    description: 'Workspace ONE API URL',
    dashboard: 'https://www.vmware.com/products/workspace-one.html',
    validate: 'url',
  },
});
