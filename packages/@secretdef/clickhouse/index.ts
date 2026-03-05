import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLICKHOUSE_HOST: {
    description: 'ClickHouse host',
    dashboard: 'https://clickhouse.cloud',
  },
  CLICKHOUSE_USER: {
    description: 'ClickHouse username',
    dashboard: 'https://clickhouse.cloud',
  },
  CLICKHOUSE_PASSWORD: {
    description: 'ClickHouse password',
    dashboard: 'https://clickhouse.cloud',
  },
  CLICKHOUSE_DATABASE: {
    description: 'ClickHouse database name',
    dashboard: 'https://clickhouse.cloud',
    required: false,
  },
});
