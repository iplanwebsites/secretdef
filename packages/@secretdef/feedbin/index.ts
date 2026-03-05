import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FEEDBIN_USERNAME: {
    description: 'Feedbin account email',
    dashboard: 'https://feedbin.com/settings',
  },
  FEEDBIN_PASSWORD: {
    description: 'Feedbin account password',
    dashboard: 'https://feedbin.com/settings',
  },
});
