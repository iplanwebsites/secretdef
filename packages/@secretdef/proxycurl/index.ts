import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PROXYCURL_API_KEY: {
    description: 'Proxycurl API key',
    dashboard: 'https://nubela.co/proxycurl/dashboard',
  },
});
