import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VERACODE_API_ID: {
    description: 'Veracode API ID',
    dashboard: 'https://web.analysiscenter.veracode.com',
  },
  VERACODE_API_KEY: {
    description: 'Veracode API key',
    dashboard: 'https://web.analysiscenter.veracode.com',
  },
});
