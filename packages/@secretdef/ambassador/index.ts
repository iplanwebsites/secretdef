import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AMBASSADOR_CLOUD_TOKEN: {
    description: 'Ambassador Cloud API token',
    dashboard: 'https://app.getambassador.io',
  },
});
