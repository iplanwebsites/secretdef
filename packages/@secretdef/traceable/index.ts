import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  TRACEABLE_API_TOKEN: {
    description: 'Traceable AI API token',
    dashboard: 'https://app.traceable.ai',
  },
});
