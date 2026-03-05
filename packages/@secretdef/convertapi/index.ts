import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  CONVERTAPI_SECRET: {
    description: 'ConvertAPI secret',
    dashboard: 'https://www.convertapi.com/a/auth',
  },
});
