import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DATABRICKS_HOST: {
    description: 'Databricks workspace URL',
    dashboard: 'https://accounts.cloud.databricks.com',
    validate: 'url',
  },
  DATABRICKS_TOKEN: {
    description: 'Databricks personal access token',
    dashboard: 'https://accounts.cloud.databricks.com',
  },
});
