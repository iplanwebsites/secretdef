import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VERCEL_TOKEN: {
    description: 'Vercel API authentication token',
    dashboard: 'https://vercel.com/account/tokens',
  },
  VERCEL_ORG_ID: {
    description: 'Vercel organization ID',
    dashboard: 'https://vercel.com/account/settings',
    required: false,
  },
  VERCEL_PROJECT_ID: {
    description: 'Vercel project ID',
    dashboard: 'https://vercel.com/docs/projects/overview',
    required: false,
  },
});
