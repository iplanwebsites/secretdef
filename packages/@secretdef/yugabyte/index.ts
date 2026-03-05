import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  YUGABYTE_HOST: {
    description: 'YugabyteDB host',
    dashboard: 'https://cloud.yugabyte.com',
  },
  YUGABYTE_USER: {
    description: 'YugabyteDB username',
    dashboard: 'https://cloud.yugabyte.com',
  },
  YUGABYTE_PASSWORD: {
    description: 'YugabyteDB password',
    dashboard: 'https://cloud.yugabyte.com',
  },
  YUGABYTE_DATABASE: {
    description: 'YugabyteDB database name',
    dashboard: 'https://cloud.yugabyte.com',
    required: false,
  },
});
