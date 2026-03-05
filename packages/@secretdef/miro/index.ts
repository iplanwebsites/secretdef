import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MIRO_ACCESS_TOKEN: {
    description: 'Miro access token',
    dashboard: 'https://miro.com/app/settings/user-profile/apps',
  },
});
