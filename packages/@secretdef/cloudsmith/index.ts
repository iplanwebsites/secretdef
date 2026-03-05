import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLOUDSMITH_API_KEY: {
    description: 'Cloudsmith API key',
    dashboard: 'https://cloudsmith.io/user/settings/api/',
  },
});
