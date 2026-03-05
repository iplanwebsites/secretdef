import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MISTRAL_API_KEY: {
    description: 'Mistral AI API key',
    dashboard: 'https://console.mistral.ai/api-keys',
  },
  MISTRAL_DEBUG: {
    description: 'Enable debug mode for Mistral SDK',
    dashboard: 'https://console.mistral.ai/api-keys',
    required: false,
  },
});
