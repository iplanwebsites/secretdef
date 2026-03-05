import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PYROSCOPE_SERVER_ADDRESS: {
    description: 'Pyroscope server address',
    dashboard: 'https://grafana.com/products/cloud/profiles/',
    validate: 'url',
  },
  PYROSCOPE_AUTH_TOKEN: {
    description: 'Pyroscope auth token',
    dashboard: 'https://grafana.com',
    required: false,
  },
});
