import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KONG_ADMIN_TOKEN: {
    description: 'Kong admin API token',
    dashboard: 'https://cloud.konghq.com',
  },
});
