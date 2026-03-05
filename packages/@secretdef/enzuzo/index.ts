import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ENZUZO_API_KEY: {
    description: 'Enzuzo API key',
    dashboard: 'https://app.enzuzo.com',
  },
});
