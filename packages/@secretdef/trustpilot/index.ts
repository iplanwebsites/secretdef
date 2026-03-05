import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TRUSTPILOT_API_KEY: {
    description: 'Trustpilot API key',
    dashboard: 'https://businessapp.b2b.trustpilot.com',
  },
  TRUSTPILOT_SECRET: {
    description: 'Trustpilot API secret',
    dashboard: 'https://businessapp.b2b.trustpilot.com',
  },
});
