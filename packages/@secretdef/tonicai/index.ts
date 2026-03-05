import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TONIC_API_KEY: {
    description: 'Tonic.ai API key',
    dashboard: 'https://app.tonic.ai',
  },
  TONIC_URL: {
    description: 'Tonic.ai instance URL',
    dashboard: 'https://app.tonic.ai',
    validate: 'url',
    required: false,
  },
});
