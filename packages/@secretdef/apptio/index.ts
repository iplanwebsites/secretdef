import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  APPTIO_API_KEY: {
    description: 'Apptio API key',
    dashboard: 'https://www.apptio.com',
  },
});
