import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PROMPTFOO_API_KEY: {
    description: 'Promptfoo API key',
    dashboard: 'https://www.promptfoo.dev',
  },
});
