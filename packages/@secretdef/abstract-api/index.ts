import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ABSTRACTAPI_API_KEY: {
    description: 'AbstractAPI key',
    dashboard: 'https://app.abstractapi.com',
  },
});
