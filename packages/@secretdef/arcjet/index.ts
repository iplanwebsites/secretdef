import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ARCJET_KEY: { description: 'Arcjet API key',
    dashboard: 'https://app.arcjet.com/' },
});
