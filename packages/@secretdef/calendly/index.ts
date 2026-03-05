import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CALENDLY_API_KEY: {
    description: 'Calendly personal access token',
    dashboard: 'https://calendly.com/integrations/api_webhooks',
  },
});
