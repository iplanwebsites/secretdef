import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  COMPOSIO_API_KEY: {
    description: 'Composio API key',
    dashboard: 'https://app.composio.dev',
  },
});
