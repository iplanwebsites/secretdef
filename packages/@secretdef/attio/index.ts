import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ATTIO_API_KEY: {
    description: 'Attio API key',
    dashboard: 'https://app.attio.com/settings/api-keys',
  },
});
