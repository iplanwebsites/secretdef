import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CORALOGIX_RUM_KEY: {
    description: 'Coralogix RUM key',
    dashboard: 'https://dashboard.coralogix.com',
  },
});
