import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  JUMPCLOUD_API_KEY: {
    description: 'JumpCloud API key',
    dashboard: 'https://console.jumpcloud.com',
  },
});
