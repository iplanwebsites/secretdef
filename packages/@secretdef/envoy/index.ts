import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ENVOY_CLIENT_ID: {
    description: 'Envoy OAuth client ID',
    dashboard: 'https://developers.envoy.com',
  },
  ENVOY_CLIENT_SECRET: {
    description: 'Envoy OAuth client secret',
    dashboard: 'https://developers.envoy.com',
  },
});
