import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  POLYTOMIC_API_KEY: {
    description: 'Polytomic API key',
    dashboard: 'https://app.polytomic.com',
  },
  POLYTOMIC_DEPLOYMENT_URL: {
    description: 'Polytomic deployment URL',
    dashboard: 'https://app.polytomic.com',
    validate: 'url',
    required: false,
  },
});
