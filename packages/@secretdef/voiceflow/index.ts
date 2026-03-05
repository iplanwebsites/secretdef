import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  VOICEFLOW_API_KEY: {
    description: 'Voiceflow API key',
    dashboard: 'https://www.voiceflow.com',
  },
});
