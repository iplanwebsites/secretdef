import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SARDINE_API_KEY: {
    description: 'Sardine fraud prevention API key',
    dashboard: 'https://sardine.ai',
  },
  SARDINE_SECRET_KEY: {
    description: 'Sardine secret key',
    dashboard: 'https://sardine.ai',
  },
});
