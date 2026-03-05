import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ELEMENTARY_API_KEY: {
    description: 'Elementary data observability API key',
    dashboard: 'https://www.elementary-data.com',
  },
});
