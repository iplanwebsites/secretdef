import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MANAGEWP_API_KEY: {
    description: 'ManageWP API key',
    dashboard: 'https://orion.managewp.com',
  },
});
