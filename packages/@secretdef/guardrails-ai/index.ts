import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  GUARDRAILS_API_KEY: {
    description: 'Guardrails AI API key',
    dashboard: 'https://hub.guardrailsai.com',
  },
});
