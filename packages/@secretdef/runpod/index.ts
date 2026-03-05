import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RUNPOD_API_KEY: {
    description: 'RunPod API key',
    dashboard: 'https://www.runpod.io/console/user/settings',
  },
});
