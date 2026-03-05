import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HOLOGRAM_API_KEY: {
    description: 'Hologram IoT API key',
    dashboard: 'https://dashboard.hologram.io',
  },
});
