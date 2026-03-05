import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TIGERGRAPH_HOST: {
    description: 'TigerGraph host',
    dashboard: 'https://tgcloud.io',
  },
  TIGERGRAPH_USERNAME: {
    description: 'TigerGraph username',
    dashboard: 'https://tgcloud.io',
  },
  TIGERGRAPH_PASSWORD: {
    description: 'TigerGraph password',
    dashboard: 'https://tgcloud.io',
  },
  TIGERGRAPH_GRAPH: {
    description: 'TigerGraph graph name',
    dashboard: 'https://tgcloud.io',
    required: false,
  },
});
