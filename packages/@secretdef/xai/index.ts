import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  XAI_API_KEY: {
    description: 'xAI (Grok) API key',
    dashboard: 'https://console.x.ai/',
  },
});
