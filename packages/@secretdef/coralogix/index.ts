import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CORALOGIX_API_KEY: {
    description: 'Coralogix API key',
    dashboard: 'https://dashboard.coralogix.com/#/acc/settings/api-keys',
  },
});
