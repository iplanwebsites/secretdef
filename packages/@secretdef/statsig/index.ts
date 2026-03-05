import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STATSIG_SERVER_SECRET_KEY: { description: 'Statsig server secret key',
    dashboard: 'https://console.statsig.com/api_keys' },
  STATSIG_CLIENT_KEY: { description: 'Statsig client SDK key',
    dashboard: 'https://console.statsig.com/api_keys', required: false },
});
