import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MANDRILL_API_KEY: {
    description: 'Mandrill API key',
    dashboard: 'https://mandrillapp.com/settings',
  },
});
