import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TAPLYTICS_SDK_KEY: {
    description: 'Taplytics SDK key',
    dashboard: 'https://taplytics.com',
  },
  TAPLYTICS_REST_API_KEY: {
    description: 'Taplytics REST API key',
    dashboard: 'https://taplytics.com',
    required: false,
  },
});
