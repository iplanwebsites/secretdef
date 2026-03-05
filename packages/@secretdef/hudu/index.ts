import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  HUDU_API_KEY: {
    description: 'Hudu API key',
    dashboard: 'https://app.huducloud.com',
  },
  HUDU_BASE_URL: {
    description: 'Hudu instance URL',
    dashboard: 'https://app.huducloud.com',
    validate: 'url',
  },
});
