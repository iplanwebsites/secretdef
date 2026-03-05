import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HOTJAR_SITE_ID: {
    description: 'Hotjar site ID',
    dashboard: 'https://insights.hotjar.com/site/list',
  },
});
