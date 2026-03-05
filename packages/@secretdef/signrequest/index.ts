import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SIGNREQUEST_API_TOKEN: {
    description: 'SignRequest API token',
    dashboard: 'https://signrequest.com',
  },
});
