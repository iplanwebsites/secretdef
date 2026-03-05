import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  YOTPO_APP_KEY: {
    description: 'Yotpo app key',
    dashboard: 'https://settings.yotpo.com',
  },
  YOTPO_SECRET: {
    description: 'Yotpo secret',
    dashboard: 'https://settings.yotpo.com',
  },
});
