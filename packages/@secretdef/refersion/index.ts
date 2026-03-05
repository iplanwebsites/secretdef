import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  REFERSION_PUBLIC_KEY: {
    description: 'Refersion public key',
    dashboard: 'https://www.refersion.com',
  },
  REFERSION_SECRET_KEY: {
    description: 'Refersion secret key',
    dashboard: 'https://www.refersion.com',
  },
});
