import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZENSERP_API_KEY: {
    description: 'Zenserp SERP API key',
    dashboard: 'https://zenserp.com',
  },
});
