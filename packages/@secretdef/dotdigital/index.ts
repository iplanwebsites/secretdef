import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DOTDIGITAL_USERNAME: {
    description: 'Dotdigital API username',
    dashboard: 'https://dotdigital.com',
  },
  DOTDIGITAL_PASSWORD: {
    description: 'Dotdigital API password',
    dashboard: 'https://dotdigital.com',
  },
});
