import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  RETELL_API_KEY: {
    description: 'Retell AI API key',
    dashboard: 'https://beta.retellai.com',
  },
});
