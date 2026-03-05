import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  WHISK_API_TOKEN: {
    description: 'Whisk food API token',
    dashboard: 'https://whisk.com/developer',
  },
});
