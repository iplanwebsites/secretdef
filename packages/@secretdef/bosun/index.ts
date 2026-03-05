import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BOSUN_URL: {
    description: 'Bosun server URL',
    dashboard: 'https://bosun.org',
    validate: 'url',
  },
});
