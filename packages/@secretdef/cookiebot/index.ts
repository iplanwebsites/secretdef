import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COOKIEBOT_ID: {
    description: 'Cookiebot domain group ID',
    dashboard: 'https://manage.cookiebot.com',
  },
});
