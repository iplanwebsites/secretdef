import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ONFIDO_API_TOKEN: {
    description: 'Onfido API token',
    dashboard: 'https://dashboard.onfido.com/api/tokens',
  },
  ONFIDO_REGION: {
    description: 'Onfido API region',
    dashboard: 'https://dashboard.onfido.com',
    required: false,
  },
});
