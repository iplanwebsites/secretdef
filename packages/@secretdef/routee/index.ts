import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ROUTEE_APPLICATION_ID: {
    description: 'Routee application ID',
    dashboard: 'https://routee.net',
  },
  ROUTEE_APPLICATION_SECRET: {
    description: 'Routee application secret',
    dashboard: 'https://routee.net',
  },
});
