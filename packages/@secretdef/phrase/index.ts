import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  PHRASE_ACCESS_TOKEN: {
    description: 'Phrase access token',
    dashboard: 'https://app.phrase.com/settings/oauth_access_tokens',
  },
});
