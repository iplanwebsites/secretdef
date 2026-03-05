import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SPEECHMATICS_API_KEY: {
    description: 'Speechmatics API key',
    dashboard: 'https://portal.speechmatics.com',
  },
});
