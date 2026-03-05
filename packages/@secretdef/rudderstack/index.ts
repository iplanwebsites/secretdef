import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RUDDERSTACK_WRITE_KEY: {
    description: 'RudderStack write key',
    dashboard: 'https://app.rudderstack.com',
  },
  RUDDERSTACK_DATA_PLANE_URL: {
    description: 'RudderStack data plane URL',
    dashboard: 'https://app.rudderstack.com',
    validate: 'url',
    required: false,
  },
});
