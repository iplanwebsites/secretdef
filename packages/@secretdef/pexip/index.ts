import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PEXIP_API_TOKEN: {
    description: 'Pexip management API token',
    dashboard: 'https://www.pexip.com',
  },
  PEXIP_URL: {
    description: 'Pexip management URL',
    dashboard: 'https://www.pexip.com',
    validate: 'url',
  },
});
