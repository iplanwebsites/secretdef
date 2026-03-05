import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BUTTER_CMS_API_KEY: {
    description: 'ButterCMS API key',
    dashboard: 'https://buttercms.com/settings/',
  },
});
