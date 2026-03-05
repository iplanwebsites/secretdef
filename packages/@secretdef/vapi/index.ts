import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VAPI_API_KEY: {
    description: 'Vapi voice AI API key',
    dashboard: 'https://dashboard.vapi.ai',
  },
});
