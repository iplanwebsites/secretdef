import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PERSONIO_CLIENT_ID: {
    description: 'Personio client ID',
    dashboard: 'https://www.personio.de',
  },
  PERSONIO_CLIENT_SECRET: {
    description: 'Personio client secret',
    dashboard: 'https://www.personio.de',
  },
});
