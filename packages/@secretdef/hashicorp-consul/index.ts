import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CONSUL_HTTP_TOKEN: {
    description: 'Consul ACL token',
    dashboard: 'https://www.consul.io',
  },
  CONSUL_HTTP_ADDR: {
    description: 'Consul server address',
    dashboard: 'https://www.consul.io',
    required: false,
  },
});
