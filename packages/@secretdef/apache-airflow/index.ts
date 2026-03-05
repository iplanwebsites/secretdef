import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AIRFLOW__CORE__FERNET_KEY: {
    description: 'Airflow Fernet encryption key',
    dashboard: 'https://airflow.apache.org',
  },
  AIRFLOW__DATABASE__SQL_ALCHEMY_CONN: {
    description: 'Airflow database connection string',
    dashboard: 'https://airflow.apache.org',
    required: false,
  },
});
