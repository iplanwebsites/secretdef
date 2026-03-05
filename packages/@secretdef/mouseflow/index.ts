import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MOUSEFLOW_API_KEY: {
    description: 'Mouseflow API key',
    dashboard: 'https://app.mouseflow.com/account',
  },
});
