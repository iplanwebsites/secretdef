import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CRISP_IDENTIFIER: {
    description: 'Crisp token identifier',
    dashboard: 'https://app.crisp.chat/settings/plugin/9/',
  },
  CRISP_KEY: {
    description: 'Crisp token key',
    dashboard: 'https://app.crisp.chat/settings/plugin/9/',
  },
});
