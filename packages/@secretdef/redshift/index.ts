import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  REDSHIFT_HOST: {
    description: 'Redshift cluster endpoint',
    dashboard: 'https://console.aws.amazon.com/redshift',
  },
  REDSHIFT_USER: {
    description: 'Redshift username',
    dashboard: 'https://console.aws.amazon.com/redshift',
  },
  REDSHIFT_PASSWORD: {
    description: 'Redshift password',
    dashboard: 'https://console.aws.amazon.com/redshift',
  },
  REDSHIFT_DATABASE: {
    description: 'Redshift database name',
    dashboard: 'https://console.aws.amazon.com/redshift',
    required: false,
  },
  REDSHIFT_PORT: {
    description: 'Redshift port',
    dashboard: 'https://console.aws.amazon.com/redshift',
    required: false,
  },
});
