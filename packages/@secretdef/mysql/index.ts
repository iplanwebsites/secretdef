import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MYSQL_HOST: {
    description: 'MySQL host',
    dashboard: 'https://dev.mysql.com',
  },
  MYSQL_USER: {
    description: 'MySQL username',
    dashboard: 'https://dev.mysql.com',
  },
  MYSQL_PASSWORD: {
    description: 'MySQL password',
    dashboard: 'https://dev.mysql.com',
  },
  MYSQL_DATABASE: {
    description: 'MySQL database name',
    dashboard: 'https://dev.mysql.com',
    required: false,
  },
  MYSQL_PORT: {
    description: 'MySQL port',
    dashboard: 'https://dev.mysql.com',
    required: false,
  },
});
