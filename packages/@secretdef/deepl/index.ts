import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  DEEPL_API_KEY: {
    description: 'DeepL API key',
    dashboard: 'https://www.deepl.com/account/summary',
  },
});
