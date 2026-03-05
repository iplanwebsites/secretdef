import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VERIFF_API_KEY: {
    description: 'Veriff API key',
    dashboard: 'https://station.veriff.com/integrations',
  },
  VERIFF_SECRET_KEY: {
    description: 'Veriff shared secret key',
    dashboard: 'https://station.veriff.com/integrations',
  },
});
