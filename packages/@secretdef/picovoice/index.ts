import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PICOVOICE_ACCESS_KEY: {
    description: 'Picovoice access key',
    dashboard: 'https://console.picovoice.ai',
  },
});
