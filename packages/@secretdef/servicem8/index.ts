import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SERVICEM8_USERNAME: {
    description: 'ServiceM8 API username',
    dashboard: 'https://www.servicem8.com',
  },
  SERVICEM8_PASSWORD: {
    description: 'ServiceM8 API password',
    dashboard: 'https://www.servicem8.com',
  },
});
