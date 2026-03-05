import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SEAM_API_KEY: {
    description: 'Seam API key',
    dashboard: 'https://console.seam.co',
  },
});
