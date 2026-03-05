import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FULA_API_KEY: {
    description: 'Functionland/Fula API key',
    dashboard: 'https://fx.land',
  },
});
