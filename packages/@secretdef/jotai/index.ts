import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  JOTAI_CLOUD_API_KEY: {
    description: 'Jotai Cloud API key',
    dashboard: 'https://jotai.org',
  },
});
