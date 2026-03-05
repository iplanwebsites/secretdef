import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CODESANDBOX_TOKEN: {
    description: 'CodeSandbox API token',
    dashboard: 'https://codesandbox.io/dashboard/settings',
  },
});
