import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  MAKE_API_KEY: {
    description: 'Make API key',
    dashboard: 'https://www.make.com',
  },
});
