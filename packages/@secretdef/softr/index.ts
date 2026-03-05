import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SOFTR_API_KEY: {
    description: 'Softr API key',
    dashboard: 'https://studio.softr.io',
  },
});
