import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SUPRSEND_WORKSPACE_KEY: {
    description: 'SuprSend workspace key',
    dashboard: 'https://app.suprsend.com/settings/developer',
  },
  SUPRSEND_WORKSPACE_SECRET: {
    description: 'SuprSend workspace secret',
    dashboard: 'https://app.suprsend.com/settings/developer',
  },
});
