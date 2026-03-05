import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NETLIFY_CMS_BACKEND_REPO: {
    description: 'Netlify CMS Git backend repo',
    dashboard: 'https://decapcms.org',
  },
});
