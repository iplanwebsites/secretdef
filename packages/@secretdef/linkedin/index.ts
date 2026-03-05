import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LINKEDIN_CLIENT_ID: {
    description: 'LinkedIn OAuth client ID',
    dashboard: 'https://www.linkedin.com/developers/apps',
  },
  LINKEDIN_CLIENT_SECRET: {
    description: 'LinkedIn OAuth client secret',
    dashboard: 'https://www.linkedin.com/developers/apps',
  },
});
