import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ACTIVECAMPAIGN_URL: {
    description: 'ActiveCampaign API URL',
    dashboard: 'https://www.activecampaign.com',
    validate: 'url',
  },
  ACTIVECAMPAIGN_KEY: {
    description: 'ActiveCampaign API key',
    dashboard: 'https://www.activecampaign.com',
  },
});
