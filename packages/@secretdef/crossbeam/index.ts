import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CROSSBEAM_API_KEY: {
    description: 'Crossbeam API key',
    dashboard: 'https://app.crossbeam.com',
  },
});
