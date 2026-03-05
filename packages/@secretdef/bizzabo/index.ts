import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  BIZZABO_API_KEY: {
    description: 'Bizzabo API key',
    dashboard: 'https://www.bizzabo.com',
  },
});
