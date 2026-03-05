import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  USERVOICE_API_KEY: {
    description: 'UserVoice API key',
    dashboard: 'https://developer.uservoice.com',
  },
  USERVOICE_SUBDOMAIN: {
    description: 'UserVoice subdomain',
    dashboard: 'https://developer.uservoice.com',
  },
});
