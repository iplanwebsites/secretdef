import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NORTHFLANK_API_KEY: {
    description: 'Northflank API key',
    dashboard: 'https://app.northflank.com/user/account/api',
  },
});
