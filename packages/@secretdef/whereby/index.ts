import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WHEREBY_API_KEY: {
    description: 'Whereby API key',
    dashboard: 'https://whereby.com/user/settings/api',
  },
});
