import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RUNWARE_API_KEY: {
    description: 'Runware API key',
    dashboard: 'https://my.runware.ai/account/api-keys',
  },
});
