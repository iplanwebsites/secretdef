import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  QUOTAGUARD_URL: {
    description: 'QuotaGuard proxy URL',
    dashboard: 'https://www.quotaguard.com',
    validate: 'url',
  },
});
