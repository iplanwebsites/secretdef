import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FRONT_API_TOKEN: {
    description: 'Front API token',
    dashboard: 'https://app.frontapp.com/settings/tools/api',
  },
});
