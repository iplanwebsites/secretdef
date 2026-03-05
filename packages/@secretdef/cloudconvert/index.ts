import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CLOUDCONVERT_API_KEY: {
    description: 'CloudConvert API key',
    dashboard: 'https://cloudconvert.com/dashboard/api/v2/keys',
  },
});
