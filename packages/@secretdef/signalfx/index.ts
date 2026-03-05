import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SIGNALFX_API_TOKEN: {
    description: 'SignalFx API access token',
    dashboard: 'https://app.signalfx.com',
  },
  SIGNALFX_REALM: {
    description: 'SignalFx realm',
    dashboard: 'https://app.signalfx.com',
    required: false,
  },
});
