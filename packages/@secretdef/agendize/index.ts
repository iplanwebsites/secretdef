import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  AGENDIZE_API_KEY: {
    description: 'Agendize API key',
    dashboard: 'https://www.agendize.com',
  },
});
