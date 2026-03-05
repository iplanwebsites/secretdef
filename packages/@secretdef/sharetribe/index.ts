import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SHARETRIBE_SDK_CLIENT_ID: {
    description: 'Sharetribe SDK client ID',
    dashboard: 'https://console.sharetribe.com',
  },
  SHARETRIBE_SDK_CLIENT_SECRET: {
    description: 'Sharetribe SDK client secret',
    dashboard: 'https://console.sharetribe.com',
    required: false,
  },
});
