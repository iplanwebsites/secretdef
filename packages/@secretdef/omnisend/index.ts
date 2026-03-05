import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OMNISEND_API_KEY: {
    description: 'Omnisend API key',
    dashboard: 'https://app.omnisend.com/integrations/api-keys',
  },
});
