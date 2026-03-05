import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COMMUSOFT_API_KEY: {
    description: 'Commusoft API key',
    dashboard: 'https://www.commusoft.co.uk',
  },
});
