import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OVH_ENDPOINT: {
    description: 'OVHcloud API endpoint',
    dashboard: 'https://eu.api.ovh.com/createToken',
  },
  OVH_APPLICATION_KEY: {
    description: 'OVHcloud application key',
    dashboard: 'https://eu.api.ovh.com/createToken',
  },
  OVH_APPLICATION_SECRET: {
    description: 'OVHcloud application secret',
    dashboard: 'https://eu.api.ovh.com/createToken',
  },
  OVH_CONSUMER_KEY: {
    description: 'OVHcloud consumer key',
    dashboard: 'https://eu.api.ovh.com/createToken',
  },
});
