import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TIDB_HOST: {
    description: 'TiDB Cloud host',
    dashboard: 'https://tidbcloud.com',
  },
  TIDB_USER: {
    description: 'TiDB Cloud username',
    dashboard: 'https://tidbcloud.com',
  },
  TIDB_PASSWORD: {
    description: 'TiDB Cloud password',
    dashboard: 'https://tidbcloud.com',
  },
  TIDB_DATABASE: {
    description: 'TiDB database name',
    dashboard: 'https://tidbcloud.com',
    required: false,
  },
});
