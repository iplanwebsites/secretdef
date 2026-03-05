import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WEBHOOK_SITE_TOKEN: {
    description: 'Webhook.site token/UUID',
    dashboard: 'https://webhook.site',
  },
});
