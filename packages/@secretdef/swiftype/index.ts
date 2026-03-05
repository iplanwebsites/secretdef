import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SWIFTYPE_API_KEY: {
    description: 'Swiftype API key',
    dashboard: 'https://app.swiftype.com/account',
  },
  SWIFTYPE_ENGINE_NAME: {
    description: 'Swiftype engine name',
    dashboard: 'https://app.swiftype.com',
    required: false,
  },
});
