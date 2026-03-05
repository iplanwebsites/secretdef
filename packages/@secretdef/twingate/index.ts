import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TWINGATE_API_KEY: {
    description: 'Twingate API key',
    dashboard: 'https://www.twingate.com',
  },
  TWINGATE_NETWORK: {
    description: 'Twingate network name',
    dashboard: 'https://www.twingate.com',
    required: false,
  },
});
