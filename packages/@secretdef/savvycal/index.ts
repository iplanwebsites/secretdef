import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SAVVYCAL_API_KEY: {
    description: 'SavvyCal API key',
    dashboard: 'https://savvycal.com',
  },
});
