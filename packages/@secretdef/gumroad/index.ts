import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GUMROAD_ACCESS_TOKEN: {
    description: 'Gumroad access token',
    dashboard: 'https://app.gumroad.com/settings/advanced',
  },
});
