import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TIDIO_API_KEY: {
    description: 'Tidio API key',
    dashboard: 'https://www.tidio.com/panel/settings/integration',
  },
});
