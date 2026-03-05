import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  USABILLA_ACCESS_KEY: {
    description: 'Usabilla access key',
    dashboard: 'https://usabilla.com',
  },
  USABILLA_SECRET_KEY: {
    description: 'Usabilla secret key',
    dashboard: 'https://usabilla.com',
  },
});
