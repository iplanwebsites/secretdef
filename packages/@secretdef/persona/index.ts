import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PERSONA_API_KEY: {
    description: 'Persona API key',
    dashboard: 'https://withpersona.com/dashboard/api-keys',
  },
  PERSONA_WEBHOOK_SECRET: {
    description: 'Persona webhook secret',
    dashboard: 'https://withpersona.com/dashboard',
    required: false,
  },
});
