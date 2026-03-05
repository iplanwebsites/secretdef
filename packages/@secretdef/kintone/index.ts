import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  KINTONE_API_TOKEN: {
    description: 'Kintone API token',
    dashboard: 'https://kintone.dev',
  },
  KINTONE_BASE_URL: {
    description: 'Kintone instance URL',
    dashboard: 'https://kintone.dev',
    validate: 'url',
  },
});
