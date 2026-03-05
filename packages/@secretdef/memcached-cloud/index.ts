import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MEMCACHEDCLOUD_SERVERS: {
    description: 'Memcached Cloud server address',
    dashboard: 'https://app.redislabs.com',
  },
  MEMCACHEDCLOUD_USERNAME: {
    description: 'Memcached Cloud username',
    dashboard: 'https://app.redislabs.com',
  },
  MEMCACHEDCLOUD_PASSWORD: {
    description: 'Memcached Cloud password',
    dashboard: 'https://app.redislabs.com',
  },
});
