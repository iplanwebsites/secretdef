import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SNOWFLAKE_ACCOUNT: {
    description: 'Snowflake account identifier',
    dashboard: 'https://app.snowflake.com',
  },
  SNOWFLAKE_USER: {
    description: 'Snowflake username',
    dashboard: 'https://app.snowflake.com',
  },
  SNOWFLAKE_PASSWORD: {
    description: 'Snowflake password',
    dashboard: 'https://app.snowflake.com',
  },
  SNOWFLAKE_WAREHOUSE: {
    description: 'Snowflake warehouse name',
    dashboard: 'https://app.snowflake.com',
    required: false,
  },
  SNOWFLAKE_DATABASE: {
    description: 'Snowflake database name',
    dashboard: 'https://app.snowflake.com',
    required: false,
  },
});
