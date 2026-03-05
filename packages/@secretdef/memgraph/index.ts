import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MEMGRAPH_HOST: {
    description: 'Memgraph host',
    dashboard: 'https://memgraph.com/cloud',
  },
  MEMGRAPH_PORT: {
    description: 'Memgraph port',
    dashboard: 'https://memgraph.com/cloud',
    required: false,
  },
  MEMGRAPH_USERNAME: {
    description: 'Memgraph username',
    dashboard: 'https://memgraph.com/cloud',
    required: false,
  },
  MEMGRAPH_PASSWORD: {
    description: 'Memgraph password',
    dashboard: 'https://memgraph.com/cloud',
    required: false,
  },
});
