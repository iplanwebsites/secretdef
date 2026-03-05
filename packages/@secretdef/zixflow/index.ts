import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZIXFLOW_API_KEY: {
    description: 'Zixflow API key',
    dashboard: 'https://zixflow.com',
  },
});
