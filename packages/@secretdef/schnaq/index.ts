import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SCHNAQ_API_KEY: {
    description: 'Schnaq API key',
    dashboard: 'https://schnaq.com',
  },
});
