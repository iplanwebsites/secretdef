import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  APTIBLE_ACCESS_TOKEN: {
    description: 'Aptible access token',
    dashboard: 'https://dashboard.aptible.com',
  },
});
