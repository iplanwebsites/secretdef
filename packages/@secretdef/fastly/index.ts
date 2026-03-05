import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  FASTLY_API_TOKEN: {
    description: 'Fastly API token',
    dashboard: 'https://manage.fastly.com/account/personal/tokens',
  },
  FASTLY_SERVICE_ID: {
    description: 'Fastly service ID',
    dashboard: 'https://manage.fastly.com',
    required: false,
  },
});
