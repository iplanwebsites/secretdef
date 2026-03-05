import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  THIRDWEB_SECRET_KEY: {
    description: 'Thirdweb secret key',
    dashboard: 'https://thirdweb.com/dashboard/settings/api-keys',
  },
  THIRDWEB_CLIENT_ID: {
    description: 'Thirdweb client ID',
    dashboard: 'https://thirdweb.com/dashboard/settings/api-keys',
    required: false,
  },
});
