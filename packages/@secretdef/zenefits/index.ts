import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZENEFITS_TOKEN: {
    description: 'Zenefits API token',
    dashboard: 'https://www.zenefits.com',
  },
});
