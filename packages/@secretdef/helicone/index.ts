import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HELICONE_API_KEY: {
    description: 'Helicone API key',
    dashboard: 'https://www.helicone.ai/settings/api-keys',
  },
});
