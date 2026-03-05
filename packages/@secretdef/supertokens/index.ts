import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  SUPERTOKENS_CONNECTION_URI: {
    description: 'SuperTokens connection URI',
    dashboard: 'https://supertokens.com/dashboard',
    validate: 'url',
  },
  SUPERTOKENS_API_KEY: {
    description: 'SuperTokens API key',
    dashboard: 'https://supertokens.com/dashboard',
    required: false,
  },
});
