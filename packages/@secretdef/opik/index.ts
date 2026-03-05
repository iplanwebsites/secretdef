import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  OPIK_API_KEY: {
    description: 'Opik API key',
    dashboard: 'https://www.comet.com/opik',
  },
  OPIK_WORKSPACE: {
    description: 'Opik workspace',
    dashboard: 'https://www.comet.com/opik',
    required: false,
  },
});
