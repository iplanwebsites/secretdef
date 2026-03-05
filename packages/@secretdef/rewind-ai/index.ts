import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  REWIND_API_KEY: {
    description: 'Rewind backup API key',
    dashboard: 'https://rewind.com',
  },
});
