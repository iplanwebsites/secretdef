import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NETLIFY_AUTH_TOKEN: {
    description: 'Netlify personal access token',
    dashboard: 'https://app.netlify.com/user/applications#personal-access-tokens',
  },
  NETLIFY_SITE_ID: {
    description: 'Netlify site ID',
    dashboard: 'https://app.netlify.com/',
    required: false,
  },
});
