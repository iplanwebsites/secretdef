import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  QOVERY_TOKEN: {
    description: 'Qovery API token',
    dashboard: 'https://console.qovery.com/settings/api-tokens',
  },
});
