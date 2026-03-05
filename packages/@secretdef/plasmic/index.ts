import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PLASMIC_PROJECT_ID: {
    description: 'Plasmic project ID',
    dashboard: 'https://studio.plasmic.app',
  },
  PLASMIC_TOKEN: {
    description: 'Plasmic API token',
    dashboard: 'https://studio.plasmic.app',
  },
});
