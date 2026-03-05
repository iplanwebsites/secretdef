import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MOESIF_APPLICATION_ID: {
    description: 'Moesif application ID',
    dashboard: 'https://www.moesif.com/wrap/onboarding',
  },
});
