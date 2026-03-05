import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NVIDIA_API_KEY: {
    description: 'NVIDIA API key',
    dashboard: 'https://build.nvidia.com/settings/api-keys',
  },
});
