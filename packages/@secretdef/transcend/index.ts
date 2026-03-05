import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TRANSCEND_API_KEY: {
    description: 'Transcend API key',
    dashboard: 'https://app.transcend.io/settings',
  },
});
