import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DOPPIO_API_KEY: {
    description: 'Doppio API key for PDF/screenshot generation',
    dashboard: 'https://doppio.sh',
  },
});
