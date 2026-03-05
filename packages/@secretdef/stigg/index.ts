import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  STIGG_SERVER_API_KEY: {
    description: 'Stigg server API key',
    dashboard: 'https://app.stigg.io',
  },
  STIGG_CLIENT_API_KEY: {
    description: 'Stigg client API key',
    dashboard: 'https://app.stigg.io',
    required: false,
  },
});
