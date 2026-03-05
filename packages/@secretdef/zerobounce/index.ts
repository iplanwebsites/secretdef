import { defineSecrets } from 'secretdef';

export const secrets = defineSecrets({
  ZEROBOUNCE_API_KEY: {
    description: 'ZeroBounce email verification API key',
    dashboard: 'https://www.zerobounce.net/members/apikeys/',
  },
});
