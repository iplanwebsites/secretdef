import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  THUMBOR_SECURITY_KEY: {
    description: 'Thumbor security key',
    dashboard: 'https://thumbor.readthedocs.io',
  },
  THUMBOR_URL: {
    description: 'Thumbor server URL',
    dashboard: 'https://thumbor.readthedocs.io',
    validate: 'url',
  },
});
