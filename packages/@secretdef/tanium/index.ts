import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TANIUM_API_TOKEN: {
    description: 'Tanium API token',
    dashboard: 'https://www.tanium.com',
  },
  TANIUM_URL: {
    description: 'Tanium server URL',
    dashboard: 'https://www.tanium.com',
    validate: 'url',
  },
});
