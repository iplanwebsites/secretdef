import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COURIER_AUTH_TOKEN: {
    description: 'Courier API auth token',
    dashboard: 'https://app.courier.com/settings/api-keys',
  },
});
