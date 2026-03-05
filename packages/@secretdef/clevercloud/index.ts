import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLEVER_TOKEN: {
    description: 'Clever Cloud API token',
    dashboard: 'https://console.clever-cloud.com',
  },
  CLEVER_SECRET: {
    description: 'Clever Cloud API secret',
    dashboard: 'https://console.clever-cloud.com',
  },
});
