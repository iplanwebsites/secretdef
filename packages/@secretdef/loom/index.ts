import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  LOOM_API_KEY: {
    description: 'Loom developer API key',
    dashboard: 'https://www.loom.com/developer-portal',
  },
});
