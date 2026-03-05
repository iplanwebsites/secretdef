import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DAYTONA_API_KEY: {
    description: 'Daytona dev environment API key',
    dashboard: 'https://www.daytona.io',
  },
});
