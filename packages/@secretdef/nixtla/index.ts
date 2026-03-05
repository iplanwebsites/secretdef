import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  NIXTLA_API_KEY: {
    description: 'Nixtla TimeGPT API key',
    dashboard: 'https://dashboard.nixtla.io',
  },
});
