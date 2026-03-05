import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  N8N_API_KEY: {
    description: 'n8n API key',
    dashboard: 'https://n8n.io',
  },
  N8N_BASE_URL: {
    description: 'n8n instance base URL',
    dashboard: 'https://n8n.io',
    validate: 'url',
  },
});
