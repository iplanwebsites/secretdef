import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FOSSA_API_KEY: {
    description: 'FOSSA API key',
    dashboard: 'https://app.fossa.com/account/settings/integrations/api_tokens',
  },
});
