import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STATUSCAKE_API_TOKEN: {
    description: 'StatusCake API token',
    dashboard: 'https://app.statuscake.com',
  },
});
